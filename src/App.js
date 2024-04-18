import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, Grid } from "@mui/material";
import Header from "./components/Header";
import FeaturedPost from "./components/FeaturedPost";
import { featuredPosts } from "./Data/Data";
import PostCard from "./components/PostCard";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import { sidebar } from "./Data/Data";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: "100px",
  },
}));
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        <FeaturedPost />
        <br />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </Grid>
        <Grid container spacing={5} className={classes.mainGrid} style={{marginTop:"25px"}}>
          <Main title="From the firebase"></Main>
          <SideBar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          ></SideBar>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
