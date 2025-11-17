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
import avatar from "../../assets/img/avatar.jpg";

function HomeEnglish() {
  return (
    <div>
      {/* Main Content */}
      <Container maxWidth="false" disableGutters>
        <Grid2 container spacing={2}>
          <Grid2
            size={{ xs: 12, sm: 4, lg: 3 }}
            style={{
              backgroundColor: "#333",
              color: "#f5f5f5",
              padding: "20px",
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
              <Typography variant="subtitle2" sx={{ color: "#ffb400", mb: 2 }}>
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
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText primary="Tuong Mai, Ha Noi" />
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
              Frontend:
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              + UI/UX programming based on ReactJS, Javacript (ES6), HTML5/CSS
              (SCSS), Jquery, Bootstrap 5, TailwindCSS
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              + Responsive web design, working with REST ful APIs. ...
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
              Backend:
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Backend programming: NodeJS, NextJS
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
              Database:
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              SQL Server, MySQL, MongoDB ...
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
              A.I:
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Proficient in applying A.I to accelerate professional tasks.
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
              DevOps:
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Exposed to practical devops knowledge, working with ci - cd of
              git, gitlab and jenkins ...
            </Typography>
            <Divider sx={{ borderColor: "#ffb400", my: 2 }} />
            {/* Interests Section */}{" "}
            <Typography
              variant="h6"
              sx={{ color: "#ffb400", fontWeight: "bold", mb: 1 }}
            >
              INTERESTS
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Reading, mountaineering, exploring, self-research and personal
              development
            </Typography>
            <Divider sx={{ borderColor: "#ffb400", my: 2 }} />
            {/* Interests Section */}
            <Typography
              variant="h6"
              sx={{ color: "#ffb400", fontWeight: "bold", mb: 1 }}
            >
              INTRODUCTION
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Aptech Computer Education
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 8, lg: 9 }}>
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
                I am a programmer with a strong eagerness to learn and
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
              <Typography sx={{ mt: 2 }}>
                Apply the knowledge learned and equipped to execute assigned
                tasks excellently with maximum effectiveness and efficiency.
              </Typography>
              <Typography sx={{ mb: 4 }}>
                Master advanced knowledge: system architecture, performance
                optimization, security, database, DevOps...
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
                  <Typography variant="body2">
                    Participation: Leader of 2 members - Aptech Semester 1
                    Project
                  </Typography>
                  <Typography variant="body2">
                    Responsibilities: Applied knowledge of HTML, CSS, Javacript,
                    PHP and Mysql. Displayed product list, search, news,
                    shopping cart, checkout and CRUD.
                  </Typography>
                </Grid2>
                <Grid2 size={6}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    VEHICLE INSURANCE (Vehicle insurance website)
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    08/2024 - 09/2024
                  </Typography>
                  <Typography variant="body2">
                    Participation: Leader of 3 members - Aptech Semester 3
                    Project
                  </Typography>
                  <Typography variant="body2">
                    Responsibilities: Created web interface using React combined
                    with UI libraries like AntDesign.... Backend built with C#
                    MVC
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
                    Participation: Leader of 4 members - Aptech Semester 4
                  </Typography>
                  <Typography variant="body2">
                    Responsibilities: Backend built with NextJS combined with
                    NodeJS Logic frontend and especially the **exam-taking
                    feature**.
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
                EDUCATION
              </Typography>
              <Grid2 container spacing={3}>
                <Grid2 size={6}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    INFORMATION TECHNOLOGY MAJOR
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    2022 - 2025
                  </Typography>
                  <Typography variant="body2">
                    Successfully completed 4 semesters, worked on 6 practical
                    projects during the curriculum at Aptech Computer Education
                    with the role of Leader in 6/6 projects.
                  </Typography>
                  <Typography variant="body2">
                    Participated in TechWiz 4 competition - the global
                    technology battle organized by Aptech
                  </Typography>
                  <Typography variant="body2">
                    Achieved Top 3 outstanding student award (Aptech Star) in
                    2025.
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
                    Researched new technologies, frameworks for frontend,
                    backend, and devops.
                  </Typography>
                  <Typography variant="body2">
                    F8 fullstack: Obtained several certificates here such as
                    HTML, CSS; Responsive; Javacript; React JS ....
                  </Typography>

                  <Typography variant="body2">
                    See the most detailed done projects and certificates:{" "}
                    <a
                      style={{ color: "#ffb400" }}
                      href="https://docs.google.com/document/d/1tXE4OIvEsiTZtiKT8U_g3Us0T8jZ-jwCZ0AGnZ9GuY0/edit?usp=sharing"
                      target="_blank"
                    >
                      Here
                    </a>
                  </Typography>
                  <Typography variant="body2">
                    Always challenge myself with new skills whenever I have free
                    time.
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
