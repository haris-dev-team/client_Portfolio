import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-scroll";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  link: {
    color: "black",
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  activeLink: {
    textDecoration: "underline",
  },
  navDisplayFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
});

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isScrolled, setIsScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigation = [
    { title: "Home", path: "home" },
    { title: "About", path: "about" },
    { title: "Experienced", path: "skills" },
    { title: "Projects", path: "projects" },
    { title: "Publications", path: "publications" },
    { title: "Contact", path: "contact" },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: isScrolled ? "white" : "transparent",
        transition: "background-color 0.3s ease-in-out",
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, color: isScrolled ? "black" : "white" }}
        >
          Suresh Chander
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ color: isScrolled ? "black" : "white" }}
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {navigation.map((section) => (
                <MenuItem key={section.title} onClick={handleClose}>
                  <Link
                    to={section.path}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-70}
                    activeClass={classes.activeLink}
                    className={classes.link}
                  >
                    {section.title}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <div className={classes.navDisplayFlex}>
            {navigation.map((section) => (
              <Button key={section.title} color="inherit">
                <Link
                  to={section.path}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  activeClass={classes.activeLink}
                  className={classes.link}
                  style={{
                    color: isScrolled ? "black" : "white",
                  }}
                >
                  {section.title}
                </Link>
              </Button>
            ))}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
