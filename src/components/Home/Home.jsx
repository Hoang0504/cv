import React from "react";
import Container from "@mui/material/Container";
import {
  Box,
  Grid2,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import classNames from "classnames/bind";

import styles from "./Home.module.scss";
import avatar from "../../assets/img/avatar.jpg";

const cx = classNames.bind(styles);

function Home() {
  return (
    <div>
      {/* Main Content */}
      <Container maxWidth="false" disableGutters>
        <Grid2 container spacing={2}>
          <Grid2 style={{ display: "flex", flex: 1 }} size={3}>
            <Box
              sx={{
                backgroundColor: "#333",
                color: "#f5f5f5",
                p: 3,
              }}
            >
              {/* Header */}
              <Grid2
                display="flex"
                justifyContent="center"
                alignItems="center"
                size="grow"
              >
                <Avatar src={avatar} sx={{ width: 100, height: 100 }} />
              </Grid2>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#ffb400" }}
                >
                  Trần Ngọc Huy Hoàng
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#ffb400", mb: 2 }}
                >
                  FONTEND & BACKEND SOFTWARE ENGINEER
                </Typography>
              </Box>

              {/* Contact Information */}
              <List>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ color: "#ffb400" }}>
                    <PhoneIcon />
                  </ListItemIcon>
                  <ListItemText primary="0397273850" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ color: "#ffb400" }}>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="ngochoanghuy0504@gmail.com" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ color: "#ffb400" }}>
                    <LocationOnIcon />
                  </ListItemIcon>
                  <ListItemText primary="Trương Định, Hoàng Mai, Hà Nội" />
                </ListItem>
              </List>

              <Divider sx={{ borderColor: "#ffb400", my: 2 }} />

              {/* Skills Section */}
              <Typography
                variant="h6"
                sx={{ color: "#ffb400", fontWeight: "bold", mb: 1 }}
              >
                Kỹ năng
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
                Frontend:
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                + Lập trình UI/UX dựa trên ReactJS, Javacript (ES6), HTML5/CSS
                (SCSS), Jquery, Bootstrap 5, TailwindCSS
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                + Thiết kế responsive web, làm việc với REST ful APIs. ...
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
                Backend:
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Lập trình backend: NodeJS, NextJS
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
                Cơ sở dữ liệu:
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                SQL Server, MySQL, MongoDB ...
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
                A.I:
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Thành thạo ứng dụng A.I để tăng tốc độ chuyên môn.
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
                DevOps:
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Được tiếp cận với các kiến thức devops trong thực tế, làm việc
                với ci - cd của git, gitlab và jenkins ...
              </Typography>

              <Divider sx={{ borderColor: "#ffb400", my: 2 }} />

              {/* Interests Section */}
              <Typography
                variant="h6"
                sx={{ color: "#ffb400", fontWeight: "bold", mb: 1 }}
              >
                SỞ THÍCH
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Đọc sách, leo núi, khám phá, tự nghiên cứu tìm tòi và phát triển
                bản thân
              </Typography>

              <Divider sx={{ borderColor: "#ffb400", my: 2 }} />

              {/* Interests Section */}
              <Typography
                variant="h6"
                sx={{ color: "#ffb400", fontWeight: "bold", mb: 1 }}
              >
                GIỚI THIỆU
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Hệ thống đào tạo lập trình viên quốc tế Aptech
              </Typography>
            </Box>
          </Grid2>
          <Grid2 size={9}>
            <Box sx={{ padding: 3 }}>
              {/* Header */}
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "#ffb400",
                }}
              >
                TÓM TẮT BẢN THÂN
              </Typography>
              <Typography sx={{ mt: 2, mb: 4 }}>
                Tôi là lập trình viên công nghệ thông tin với tinh thần ham học
                hỏi và kiên trì. Mặc dù có một số hạn chế về khả năng phát âm và
                sự linh hoạt, tôi luôn nỗ lực hết mình để hoàn thành xuất sắc
                mọi nhiệm vụ được giao. Với sự chăm chỉ và tinh thần trách
                nhiệm, tôi mong muốn đóng góp vào sự phát triển của công ty,
                đồng thời trau dồi thêm kiến thức và kỹ năng trong lĩnh vực lập
                trình frontend và backend.
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "#ffb400",
                }}
              >
                MỤC TIÊU NGHỀ NGHIỆP
              </Typography>
              <Typography sx={{ mt: 2 }}>
                Áp dụng những kiến thức được học và trang bị để thực hiện xuất
                sắc nhiệm vụ được giao với hiệu quả và hiệu suất tối đa.
              </Typography>
              <Typography sx={{ mb: 4 }}>
                Nắm vững các kiến thức nâng cao: kiến trúc hệ thống, tối ưu hiệu
                năng, bảo mật, cơ sở dữ liệu, DevOps...
              </Typography>

              {/* Projects Section */}
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#ffb400" }}
              >
                DỰ ÁN ĐÃ LÀM
              </Typography>
              <Grid2 container spacing={3} sx={{ mb: 4 }}>
                <Grid2 size={6}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    TINYTOTS - SHOP BABY
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    06/2023 - 07/2023
                  </Typography>
                  <Typography variant="body2">Đồ án 1 Aptech</Typography>
                  <Typography variant="body2">
                    Tham gia: Leader 2 thành viên - Đồ án kỳ 1 của Aptech
                  </Typography>
                  <Typography variant="body2">
                    Nhiệm vụ: Áp dụng những kiến thức về HTML,CSS, Javacript,
                    PHP và Mysql Hiển thị danh sách sản phẩm, tìm kiếm, tin tức,
                    giỏ hàng, checkout và CRUD
                  </Typography>
                </Grid2>
                <Grid2 size={6}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    VEHICLE INSURANCE (Website bảo hiểm xe cộ)
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    08/2024 - 09/2024
                  </Typography>
                  <Typography variant="body2">
                    Tham gia: Leader 3 thành viên - Đồ án kỳ 3 của Aptech
                  </Typography>
                  <Typography variant="body2">
                    Nhiệm vụ: Tạo giao diện web bằng react kết hợp với các thư
                    viện tạo giao diện như Antdesign.... Backend làm bằng C# MVC
                  </Typography>
                </Grid2>
                <Grid2 size={6}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    EDUTIC - Website ôn luyện thi TOEIC
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    05/2025 - 06/2025
                  </Typography>
                  <Typography variant="body2">
                    Tham gia: Leader 4 thành viên - Kỳ 4 Aptech
                  </Typography>
                  <Typography variant="body2">
                    Nhiệm vụ: Backend làm bằng NextJS kết hợp NodeJS Logic
                    frontend và đặc biệt là phần làm bài thi
                  </Typography>
                </Grid2>
                <Grid2 size={6}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    VÀ NHIỀU DỰ ÁN KHÁC NŨA ... (CÓ THỂ XEM Ở PHẦN DỰ ÁN ĐÃ LÀM)
                  </Typography>
                  <Typography variant="body2">
                    Đã làm 2 website thực tế:
                  </Typography>
                  <Typography variant="body2">
                    DMAX - HỌC CHẮC THI ĐẠT TOEIC:{" "}
                    <a
                      style={{ color: "#ffb400" }}
                      href="https://dmaxtoeic.edu.vn"
                      target="_blank"
                    >
                      https://dmaxtoeic.edu.vn
                    </a>
                  </Typography>
                  <Typography variant="body2">
                    DSKILL - NÂNG CAO KỸ NĂNG MỀM:{" "}
                    <a
                      style={{ color: "#ffb400" }}
                      href="https://dskill.edu.vn"
                      target="_blank"
                    >
                      https://dskill.edu.vn
                    </a>
                  </Typography>
                </Grid2>
              </Grid2>

              {/* Education Section */}
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#ffb400" }}
              >
                HỌC VẤN
              </Typography>
              <Grid2 container spacing={3}>
                <Grid2 size={6}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    CHUYÊN NGÀNH CÔNG NGHỆ THÔNG TIN
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    2022 - 2025
                  </Typography>
                  <Typography variant="body2">
                    Hoàn thành xuất sắc 4 kỳ học, làm được thực tế 6 đồ án trong
                    chương trình học tại hệ thống đào tạo lập trình viên Quốc tế
                    Aptech với vai trò Leader 6/6 đồ án.
                  </Typography>
                  <Typography variant="body2">
                    Tham gia cuộc thi TechWiz 4 - cuộc chiến công nghệ toàn cầu
                    do Aptech tổ chức
                  </Typography>
                  <Typography variant="body2">
                    Đạt được giải thưởng top 3 học viên tiêu biểu (Aptech Star)
                    năm 2025.
                  </Typography>
                </Grid2>
                <Grid2 size={6}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    TỰ HỌC
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    2020 - Nay
                  </Typography>
                  <Typography variant="body2">
                    Tìm hiểu các công nghệ mới, các framework dành cho fonend và
                    backend và devops.
                  </Typography>
                  <Typography variant="body2">
                    F8 fullstack: Có được 1 số chứng chỉ ở đây như HTML, CSS;
                    Responsive; Javacript; React JS ....
                  </Typography>

                  <Typography variant="body2">
                    Xem chi tiết nhất những dự án đã làm và chứng chỉ:{" "}
                    <a
                      style={{ color: "#ffb400" }}
                      href="https://docs.google.com/document/d/1tXE4OIvEsiTZtiKT8U_g3Us0T8jZ-jwCZ0AGnZ9GuY0/edit?usp=sharing"
                      target="_blank"
                    >
                      Tại đây
                    </a>
                  </Typography>
                  <Typography variant="body2">
                    Luôn tự thử thách bản thân với những kỹ năng mới mỗi khi có
                    thời gian rảnh.
                  </Typography>
                </Grid2>
              </Grid2>

              {/* Skills and Work Experience Section */}
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#ffb400" }}
              >
                KINH NGHIỆM LÀM VIỆC
              </Typography>
              <Grid2 container spacing={3}>
                <Grid2 size={6}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    CỘNG SỰ
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    2023 - 2024
                  </Typography>
                  <Typography variant="body2">
                    Dskill - nâng cao kỹ năng mềm
                  </Typography>
                  <Typography variant="body2">
                    - Đội nhóm cùng học tập các kỹ năng giao tiếp, thuyết trình,
                    làm việc nhóm, lãnh đạo, ...
                  </Typography>
                  <Typography variant="body2">
                    - Mang lại giá trị, nâng cao kỹ năng mềm - giao tiếp -
                    thuyết trình cho sinh viên.
                  </Typography>
                  <Typography variant="body2">
                    - Rèn luyện kỹ năng photoshop, edit video.
                  </Typography>
                  <Typography variant="body2">- Tình nguyện</Typography>
                </Grid2>
                <Grid2 size={6}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    FREELANCE
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    2025 - nay
                  </Typography>
                  <Typography variant="body2">
                    Chủ yếu tập trung về ngôn ngữ next.js 14
                  </Typography>
                </Grid2>
              </Grid2>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
}

export default Home;
