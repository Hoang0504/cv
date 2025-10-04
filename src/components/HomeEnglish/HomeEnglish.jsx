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
  Paper,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import classNames from "classnames/bind";

import styles from "./HomeEnglish.module.scss";
import avatar from "../../assets/img/avatar.jpg";

const cx = classNames.bind(styles);

function HomeEnglish() {
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
                  Tran Ngoc Huy Hoang
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#ffb400", mb: 2 }}
                >
                  FRONTEND & BACKEND SOFTWARE ENGINEER
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
                      Here
                    </Link>
                  </ListItemText>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ color: "#ffb400" }}>
                    <LocationOnIcon />
                  </ListItemIcon>
                  <ListItemText primary="Truong Dinh, Hoang Mai, Ha Noi" />
                </ListItem>
              </List>

              <Divider sx={{ borderColor: "#ffb400", my: 2 }} />

              {/* Skills Section */}
              <Typography
                variant="h6"
                sx={{ color: "#ffb400", fontWeight: "bold", mb: 1 }}
              >
                SKILLS
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
                MAJOR
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Research and learn new technologies.
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Deployed several frontend & backend website projects with
                Next.js 14.
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
                Frontend:
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                + UI/UX programming based on ReactJS, Javascript (ES6),
                HTML5/CSS (sass), Jquery, Bootstrap 5 ...
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                + Responsive web design, working with RESTful APIs ...
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
                Backend:
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Backend programming: PHP, C#, NodeJS, Java and databases SQL
                Server, MySQL, MongoDB ...
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
                DevOps:
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Exposed to real-world devops knowledge, working with CI/CD on
                git, gitlab and jenkins ...
              </Typography>

              <Divider sx={{ borderColor: "#ffb400", my: 2 }} />

              {/* Interests Section */}
              <Typography
                variant="h6"
                sx={{ color: "#ffb400", fontWeight: "bold", mb: 1 }}
              >
                INTERESTS
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Reading books, climbing, exploring, self-researching and
                developing myself
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
                PERSONAL SUMMARY
              </Typography>
              <Typography sx={{ mt: 2, mb: 4 }}>
                I am an IT student with a strong eagerness to learn and
                persistence. Although I have some limitations in pronunciation
                and flexibility, I always strive to complete every task assigned
                to me. With diligence and responsibility, I aim to contribute to
                the company’s growth while improving my knowledge and skills in
                frontend and backend programming.
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "#ffb400",
                }}
              >
                CAREER OBJECTIVES
              </Typography>
              <Typography sx={{ mt: 2, mb: 4 }}>
                Apply the knowledge and skills I have learned to perform
                assigned tasks with high quality and efficiency. Aim to become a
                Junior Developer within the next year and a Senior Developer in
                the next 5 years. Master advanced knowledge: system
                architecture, performance optimization, security, databases,
                DevOps...
              </Typography>

              {/* Projects Section */}
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#ffb400" }}
              >
                PROJECTS
              </Typography>
              <Grid2 container spacing={3} sx={{ mb: 4 }}>
                <Grid2 size={6}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    TINYTOTS - SHOP BABY
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    06/2023 - 07/2023
                  </Typography>
                  <Typography variant="body2">Aptech Project 1</Typography>
                  <Typography variant="body2">Duration: 1 month</Typography>
                  <Typography variant="body2">Team size: 2 members</Typography>
                  <Typography variant="body2">
                    Applied knowledge of HTML, CSS, Javascript, PHP, and MySQL.
                    Created interface and responsive design.
                  </Typography>
                </Grid2>
                <Grid2 size={6}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    VEHICLE INSURANCE (Website for vehicle insurance)
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    08/2024 - 09/2024
                  </Typography>
                  <Typography variant="body2">
                    Team of 4 members with role as team leader
                  </Typography>
                  <Typography variant="body2">
                    Built web interface using React with UI libraries like
                    AntDesign..., backend with C# MVC
                  </Typography>
                </Grid2>
                <Grid2 size={6}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    EDUTIC - TOEIC Exam Practice Website
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    05/2025 - 06/2025
                  </Typography>
                  <Typography variant="body2">
                    Leader of 4 members - Aptech Semester 4
                  </Typography>
                  <Typography variant="body2">
                    Backend, frontend logic and especially exam-taking feature
                  </Typography>
                </Grid2>
                <Grid2 size={6}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    AND MANY OTHER PROJECTS ... (SEE PROJECT SECTION)
                  </Typography>
                  <Typography variant="body2">
                    Completed 2 real-world websites:
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
                EDUCATION
              </Typography>
              <Grid2 container spacing={3}>
                <Grid2 size={6}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    INFORMATION TECHNOLOGY MAJOR
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    2022 - Present
                  </Typography>
                  <Typography variant="body2">
                    International Programmer Training System - Aptech
                  </Typography>
                  <Typography variant="body2">
                    Participated in Techwiz contest organized by Aptech
                  </Typography>
                  <Typography variant="body2">
                    Achieved many good results here
                  </Typography>
                </Grid2>
                <Grid2 size={6}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    SELF-STUDY
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    2020 - Present
                  </Typography>
                  <Typography variant="body2">
                    Learned new technologies, frontend/backend frameworks and
                    DevOps.
                  </Typography>
                  <Typography variant="body2">
                    F8 Fullstack: Obtained several certificates such as HTML,
                    CSS, Responsive, Javascript, ReactJS ....
                  </Typography>
                </Grid2>
              </Grid2>

              {/* Skills and Work Experience Section */}
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#ffb400" }}
              >
                WORK EXPERIENCE
              </Typography>
              <Grid2 container spacing={3}>
                <Grid2 size={6}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    ASSOCIATE
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    2023 - 2024
                  </Typography>
                  <Typography variant="body2">
                    Dskill - soft skills training
                  </Typography>
                  <Typography variant="body2">
                    - Teamwork learning communication, presentation, teamwork,
                    leadership, ...
                  </Typography>
                  <Typography variant="body2">
                    - Brought value, improved soft skills - communication -
                    presentation for students.
                  </Typography>
                  <Typography variant="body2">
                    - Practiced photoshop, video editing.
                  </Typography>
                  <Typography variant="body2">- Volunteering</Typography>
                </Grid2>
                <Grid2 size={6}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    FREELANCE
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    2025 - Present
                  </Typography>
                  <Typography variant="body2">
                    Mainly focused on Next.js 14
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

export default HomeEnglish;
