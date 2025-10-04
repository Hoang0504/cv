import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { routes } from "../config";

function Header() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          CV -Trần Ngọc Huy Hoàng
        </Typography>
        <Button color="inherit" href={routes.home}>
          CV Tiếng Việt
        </Button>
        <Button color="inherit" href={routes.cvEnglish}>
          English CV
        </Button>
        <Button
          color="inherit"
          target="_blank"
          href="https://drive.google.com/drive/folders/1Q6ux1HYkc4UBUrNIeswmqfnxACs9vVG5?usp=sharing"
        >
          Chứng chỉ
        </Button>
        <Button
          color="inherit"
          target="_blank"
          href="https://youtu.be/-oejk_fzRGo"
        >
          Video giới thiệu bản thân
        </Button>
        <Button color="inherit" href={routes.projects}>
          Các dự án đã làm
        </Button>
        <Button
          color="inherit"
          target="_blank"
          href="https://drive.google.com/file/d/1c3d8w_5M9R0aReH11MWrmf7VVxNChTk5/view"
        >
          Cam kết với công ty
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
