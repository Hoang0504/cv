import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close"; // Thêm icon đóng

import { Link } from "react-router-dom";

import { routes } from "../config";

// Dữ liệu các liên kết được tổ chức lại để dễ quản lý và render
const navItems = [
  { name: "CV Tiếng Việt", href: routes.home, external: false },
  { name: "English CV", href: routes.cvEnglish, external: false },
  {
    name: "Chứng chỉ",
    href: "https://drive.google.com/drive/folders/1Q6ux1HYkc4UBUrNIeswmqfnxACs9vVG5?usp=sharing",
    external: true,
  },
  {
    name: "Video giới thiệu bản thân",
    href: "https://youtu.be/-oejk_fzRGo",
    external: true,
  },
  { name: "Các dự án đã làm", href: routes.projects, external: false },
  {
    name: "Cam kết với công ty",
    href: "https://drive.google.com/file/d/1c3d8w_5M9R0aReH11MWrmf7VVxNChTk5/view",
    external: true,
  },
];

// *Lưu ý: routes là placeholder, bạn cần đảm bảo object routes đã được định nghĩa.
// const routes = { home: '/', cvEnglish: '/english-cv', projects: '/projects' };

function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  // Nội dung của Drawer (Menu Mobile)
  const drawerContent = (
    <Box
      sx={{ width: 250 }} // Đặt chiều rộng cho menu trượt
      role="presentation"
      onClick={handleDrawerToggle} // Đóng Drawer khi click vào link
      onKeyDown={handleDrawerToggle}
    >
      {/* Nút đóng ở góc trên bên phải của Drawer */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />

      {/* Danh sách các mục menu */}
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component="a" // Sử dụng thẻ 'a' cho các link
              href={item.href}
              target={item.external ? "_blank" : "_self"}
              // Thêm rel="noopener noreferrer" cho các link mở tab mới để bảo mật
              rel={item.external ? "noopener noreferrer" : undefined}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
      }}
    >
      <AppBar position="static" color="primary" style={{ minHeight: "64px" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CV -Trần Ngọc Huy Hoàng
          </Typography>

          {/* 1. Các nút Menu trên Desktop (màn hình >= md) */}
          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            {navItems.map((item) => {
              const isExternal = item.external;

              return (
                <Button
                  key={item.name}
                  color="inherit"
                  // Sử dụng prop component để render Button như một thành phần khác
                  component={isExternal ? "a" : Link}
                  // Đối với link ngoài, dùng href và target
                  href={isExternal ? item.href : undefined}
                  target={isExternal ? "_blank" : "_self"}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  // Đối với link nội bộ, dùng thuộc tính to của React Router Link
                  to={!isExternal ? item.href : undefined}
                >
                  {item.name}
                </Button>
              );
            })}
          </Box>

          {/* 2. Nút Menu Hamburger trên Mobile/Tablet (màn hình < md) */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            // Chỉ hiển thị nút này trên màn hình nhỏ (extra-small)
            sx={{ display: { xs: "block", lg: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* 3. Drawer (Menu trượt) */}
      <Drawer
        anchor="right" // Quyết định menu trượt từ phải sang
        open={openDrawer} // Trạng thái mở/đóng
        onClose={handleDrawerToggle} // Xử lý khi click ra ngoài hoặc nhấn Esc
        // Drawer của MUI đã có hiệu ứng trượt mượt (từ từ) mặc định
      >
        {drawerContent}
      </Drawer>
    </div>
  );
}

export default Header;
