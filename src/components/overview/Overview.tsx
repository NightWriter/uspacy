import React, { FC, useState, useEffect, useRef } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";

import LogoCompany from "../../assets/icons/logo-company.svg";
import Slash from "../../assets/icons/slash.svg";
import Download from "../../assets/icons/download.svg";
import UspacyLogoMain from "../../assets/icons/uspacy-logo-main.png";
import Dash from "../../assets/icons/dash-data.svg";

import "../../styles/fonts.css";

const Overview: FC = () => {
  const targetRef = useRef<HTMLElement | null>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const handleScroll = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const words = [
    "підприємництво",
    "мрію",
    "перемогу",
    "сенси",
    "майбутнє",
    "лідерство",
    "місію",
    "бізнес",
    "візію",
    "допомогу",
  ];

  const sm = useMediaQuery("(max-width:900px)");
  const xs = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [words.length]);
  return (
    <>
      <Container>
        <Stack
          direction="row"
          spacing={0}
          sx={{
            justifyContent: "space-between",
            alignItems: "flex-start",
            paddingTop: xs ? "34px" : sm ? "54px" : "74px",
            paddingBottom: xs ? "65px" : sm ? "80px" : "103px",
            position: "sticky",
            top: "0",
            zIndex: "5",
          }}
        >
          <img src={LogoCompany} alt="logo company" />

          <Button
            variant="contained"
            onClick={handleScroll}
            sx={{
              backgroundColor: "#FFFFFF",
              textTransform: "none",
              color: "#000000",
              fontFamily: '"ManropeSemiBold", sans-serif',
              fontSize: xs ? "0.75rem" : sm ? "0.875rem" : "1rem",
              borderRadius: "100px",
              boxShadow: "none",
              height: xs ? "52px" : sm ? "55px" : "58px",
              width: xs ? "145px" : sm ? "180px" : "213px",
              "&:hover": {
                backgroundColor: "#FCB02D",
                color: "#FFFFFF",
                fontFamily: '"ManropeSemiBold", sans-serif',
              },
            }}
          >
            Зареєструватися
          </Button>
        </Stack>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#FFFFFF",
                fontFamily: '"ManropeSemiBold", sans-serif',
                fontSize: xs ? "0.75rem" : sm ? "0.875rem" : "1rem",
              }}
            >
              Онлайн-конференція
            </Typography>

            <img
              src={Slash}
              alt=""
              style={{
                marginLeft: "10px",
                marginRight: "5px",
                height: xs ? "30px" : "100%",
              }}
            />

            <Typography
              variant="body2"
              sx={{
                color: "#FFFFFF",
                fontFamily: '"ManropeSemiBold", sans-serif',
                fontSize: xs ? "0.75rem" : sm ? "0.875rem" : "1rem",
              }}
            >
              30 квітня о 10:00
            </Typography>
          </Box>

          <Typography
            variant="h1"
            sx={{
              color: "#FFFFFF",
              fontFamily: '"MontserratBlack", sans-serif',
              fontSize: xs ? "2.5rem" : sm ? "5rem" : "7.5rem",
              lineHeight: xs ? "2.625rem" : sm ? "4.688rem" : "6.563rem",
              paddingTop: xs ? "25px" : sm ? "30px" : "35px",
              textAlign: "center",
            }}
          >
            Ми віримо у
          </Typography>

          <Typography
            variant="h1"
            sx={{
              color: "#FFFFFF",
              fontFamily: '"MontserratBlack", sans-serif',
              fontSize: xs ? "2.5rem" : sm ? "5rem" : "7.5rem",
              lineHeight: xs ? "2.625rem" : sm ? "4.688rem" : "6.563rem",
              paddingTop: "15px",
              textAlign: "center",
            }}
          >
            {words[currentWordIndex]}
          </Typography>

          <Button
            onClick={handleScroll}
            variant="contained"
            sx={{
              backgroundColor: "#452AF4",
              textTransform: "none",
              fontFamily: '"ManropeSemiBold", sans-serif',
              fontSize: xs ? "0.75rem" : sm ? "0.875rem" : "1rem",
              color: "#FFFFFF",
              borderRadius: "100px",
              boxShadow: "none",
              width: xs ? "145px" : sm ? "180px" : "213px",
              "&:hover": {
                backgroundColor: "#FCB02D",
                color: "#FFFFFF",
                fontFamily: '"ManropeSemiBold", sans-serif',
              },
              marginTop: "43px",
              marginBottom: "63px",
              height: xs ? "52px" : sm ? "55px" : "58px",
            }}
          >
            Зареєструватися
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: xs ? "column" : "row",
            justifyContent: "center",
            maxWidth: "1130px",
            position: "relative",
            alignItems: xs ? "center" : "start",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "#FFFFFF",
              fontFamily: '"MontserratExtraBolt", sans-serif',
              fontSize: xs ? "1.375rem" : sm ? "1.688rem" : "2rem",
              lineHeight: xs ? "1.375rem" : sm ? "1.688rem" : "2rem",
              paddingBottom: xs ? "20px" : "0",
              textAlign: xs ? "center" : "",
              textWrap: xs ? "wrap" : sm ? "wrap" : "nowrap",
            }}
          >
            {xs ? "Про що ця онлайн - конференція" : ``}
            {xs ? "" : "Про що ця"}
            <br />
            {xs ? "" : "онлайн-конференція"}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: xs ? "0" : sm ? "50px" : "65px",
              alignItems: xs ? "center" : "start",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#FFFFFF",
                marginBottom: "44px",
                fontSize: xs ? "0.875rem" : sm ? "1.188rem" : "1.4rem",
                lineHeight: xs ? "1.375rem" : sm ? "1.688rem" : "2.25rem",
                fontFamily: '"ManropeRegular", sans-serif',
              }}
            >
              Щодня ми ходимо на роботу, зустрічаємося з друзями,
              <br /> донатимо на Перемогу, робимо рутинні речі. Але чи
              <br />
              замислюємося ми щодня навіщо це все? Чи є у цьому сенс?
              <br /> Чи бачимо ми своє майбутнє? Чи мріємо ми?
            </Typography>

            <img src={Download} alt="" width="26" height="54" />
          </Box>

          <img
            style={{ width: "98vw", position: "absolute", top: "0" }}
            src={UspacyLogoMain}
            alt=""
          />
        </Box>

        <Stack
          direction="row"
          spacing={xs ? 0.5 : sm ? 2 : 2.5}
          alignItems="center"
          justifyContent="center"
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "98.4%",
            backgroundColor: "#452AF4",
            zIndex: 4,
            height: "46px",
            padding: "0 10px",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "#FFFFFF",
              fontSize: xs ? "0.75rem" : sm ? "0.875rem" : "1rem",
              lineHeight: "0.813rem",
              fontFamily: '"ManropeSemiBold", sans-serif',
              paddingLeft: "10px",
              textAlign: "end",
            }}
          >
            Безкоштовна онлайн-конференція
          </Typography>

          <img
            src={Dash}
            alt=""
            style={{ width: sm ? "25px" : "34px" }}
            height="1.5"
          />

          <Typography
            variant="body1"
            sx={{
              color: "#FFFFFF",
              fontSize: xs ? "0.75rem" : sm ? "0.875rem" : "1rem",
              lineHeight: "0.813rem",
              fontFamily: '"ManropeSemiBold", sans-serif',
              paddingRight: "10px",
            }}
          >
            30 квітня о 10:00
          </Typography>
        </Stack>
      </Container>

      <Box
        sx={{
          maxWidth: "455px",
          margin: "0 auto",
          paddingTop: xs ? "100px" : sm ? "150px" : "200px",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        <Typography
          ref={targetRef}
          variant="h2"
          sx={{
            fontSize: xs ? "1.375rem" : sm ? "1.688rem" : "2.125rem",
            fontLine: xs ? "1.375rem" : sm ? "1.688rem" : "2.125rem",
            paddingBottom: xs ? "15px" : sm ? "20px" : "20px",
            fontFamily: "'MontserratExtraBolt', sans-serif",
          }}
        >
          Відвідати <br /> онлайн-конференцію
        </Typography>
      </Box>
    </>
  );
};

export default Overview;
