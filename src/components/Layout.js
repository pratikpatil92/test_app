import {
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  AddCircleOutlineOutlined,
  SubjectOutlined,
  AssessmentOutlined,
} from "@material-ui/icons";
import { format } from "date-fns";
import { useLocation, useNavigate } from "react-router-dom";
import { isLogin } from "../utils/utils";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: "#f9f9f9",
      width: "100%",
      height: "92.5vh",
      padding: theme.spacing(3),
    },
    root: {
      display: "flex",
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    active: {
      background: "#f4f4f4",
    },
    title: {
      padding: theme.spacing(2),
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    date: {
      flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,
    avatar: {
      marginLeft: theme.spacing(2),
    },
  };
});

export default function Layout({ children }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const login = { cursor: "pointer" };

  const menuItems = [
    {
      text: "Home",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
      private: false,
    },
    {
      text: "Cart",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/cart",
      private: false,
    },
    {
      text: "Product Managemet",
      icon: <AssessmentOutlined color="secondary" />,
      path: "/productManagement",
      private: true,
    },
  ];
  const onLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  if (window.location.pathname === "/login" || window.location.pathname === "/signup") {
    return <div>{children}</div>;
  } else {
    return (
      <div className={classes.root}>
        {/* app bar */}
        <AppBar
          position="fixed"
          className={classes.appBar}
          elevation={0}
          color="primary"
        >
          <Toolbar>
            <Typography className={classes.date}>
              Today is the {format(new Date(), "do MMMM Y")}
            </Typography>
            {isLogin() ? (
              <Typography style={login} onClick={onLogout}>
                Logout
              </Typography>
            ) : (
              <Typography style={login} onClick={() => navigate("/login")}>
                Login
              </Typography>
            )}
          </Toolbar>
        </AppBar>

        {/* side drawer */}
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{ paper: classes.drawerPaper }}
          anchor="left"
        >
          <div>
            <Typography variant="h5" className={classes.title}>
              Shopping.com
            </Typography>
          </div>

          {/* links/list section */}
          <List>
            {menuItems.map((item) =>
              item.private && !isLogin() ? null : isLogin() ? (
                <ListItem
                  button
                  key={item.text}
                  onClick={() => navigate(item.path)}
                  className={
                    location.pathname === item.path ? classes.active : null
                  }
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              ) : (
                <ListItem
                  button
                  key={item.text}
                  onClick={() => navigate(item.path)}
                  className={
                    location.pathname === item.path ? classes.active : null
                  }
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              )
            )}
          </List>
        </Drawer>

        {/* main content */}
        <div className={classes.page}>
          <div className={classes.toolbar}></div>
          {children}
        </div>
      </div>
    );
  }
}
