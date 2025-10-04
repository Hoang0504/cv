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
  Link,
  Avatar,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
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
                    <FacebookIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Link
                      href="https://www.facebook.com/hoanghuy2k4"
                      target="_blank"
                      underline="hover"
                      sx={{ color: "#ffb400" }}
                    >
                      Tại đây
                    </Link>
                  </ListItemText>
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
                CÁC KỸ NĂNG
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
                CHUYÊN NGÀNH
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Nghiên cứu và học hỏi các công nghệ mới.
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Đã triển khai một số dự án website fe & be với Next.js 14.
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
                Front end:
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                + Lập trình UI/UX dựa trên ReactJS, Javascript (ES6), HTML5/CSS
                (sass), Jquery, Bootstrap 5 ...
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                + Thiết kế responsive web design, làm việc với RESTful APIs ...
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
                Back end:
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Lập trình backend: PHP, C#, NodeJS, Java và cơ sở dữ liệu SQL
                Server, MySQL, MongoDB ...
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
                Tôi là một sinh viên công nghệ thông tin với tinh thần ham học
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
              <Typography sx={{ mt: 2, mb: 4 }}>
                Áp dụng những kiến thức được học và trang bị những kỹ năng để
                thực hiện nhiệm vụ được giao với chất lượng và hiệu quả cao.
                Hướng tới hoàn thành Junior Developer trong vòng 1 năm tới và
                trở thành Senior Developer trong 5 năm tiếp theo. Nắm vững các
                kiến thức nâng cao: kiến trúc hệ thống, tối ưu hiệu năng, bảo
                mật, cơ sở dữ liệu, DevOps...
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
                  <Typography variant="body2">Thời gian: 1 tháng</Typography>
                  <Typography variant="body2">
                    Tham gia: 2 thành viên
                  </Typography>
                  <Typography variant="body2">
                    Áp dụng những kiến thức về HTML, CSS, Javascript, PHP và
                    mysql. Tạo giao diện và responsive.
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
                    Tham gia: 4 thành viên tham gia cùng với vị trí trưởng nhóm
                  </Typography>
                  <Typography variant="body2">
                    Tạo giao diện web bằng react kết hợp với các thư viện tạo
                    giao diện như Antdesign..., backend làm bằng c# MVC
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
                    Backend, logic Fontend và đặc biệt là phần làm bài thi
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
                    <a href="https://dmaxtoeic.edu.vn" target="_blank">
                      https://dmaxtoeic.edu.vn
                    </a>
                  </Typography>
                  <Typography variant="body2">
                    DSKILL - NÂNG CAO KỸ NĂNG MỀM:{" "}
                    <a href="https://dskill.edu.vn" target="_blank">
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
                    2022 - Nay
                  </Typography>
                  <Typography variant="body2">
                    Hệ thống đào tạo lập trình viên Quốc tế Aptech
                  </Typography>
                  <Typography variant="body2">
                    Từng tham gia cuộc thi techwiz do Aptech tổ chức
                  </Typography>
                  <Typography variant="body2">
                    Đạt nhiều kết quả tốt tại đây
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
