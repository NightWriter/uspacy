import React, { FC, useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Stack, Button, Box, FormControlLabel } from "@mui/material";
import MainInput from "../mainInput/MainInput";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import ImgCheckBox from "../../assets/icons/check-box.svg";
import CheckBoxChecked from "../../assets/icons/check-box-checked.svg";
import useMediaQuery from "@mui/material/useMediaQuery";

interface FormValues {
  name: string;
  surname: string;
  phone: string;
  companyName: string;
  otherField: string;
  email: string;
  agreeToTerms: boolean;
}

const Registration: FC = () => {
  const initialValues: FormValues = {
    name: "",
    surname: "",
    phone: "",
    companyName: "",
    otherField: "",
    email: "",
    agreeToTerms: false,
  };

  const sm = useMediaQuery("(max-width:900px)");
  const xs = useMediaQuery("(max-width:600px)");

  const validationSchema = Yup.object({
    name: Yup.string().required("Це поле обов'язкове"),
    email: Yup.string()
      .email("Некоректний email")
      .required("Це поле обов'язкове"),
    surname: Yup.string().required("Це поле обов'язкове"),
    phone: Yup.string()
      .transform((value) => value.replace(/\D/g, ""))
      .min(12, "Телефон повинен містити щонайменше 12 цифр")
      .required("Це поле обов'язкове"),
    companyName: Yup.string().required("Це поле обов'язкове"),
    otherField: Yup.string(),
    agreeToTerms: Yup.boolean().oneOf([true], "You must accept the terms"),
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  useEffect(() => {}, []);
  return (
    <Container
      sx={{
        paddingBottom: xs ? "75px" : sm ? "110px" : "145px",
      }}
    >
      <Box
        sx={{
          maxWidth: "455px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ dirty, isValid, values, errors, touched, setFieldValue }) => (
              <Form>
                <MainInput name="name" placeholder="Імʼя*" label="Імʼя*" />

                <MainInput
                  name="surname"
                  placeholder="Прізвище*"
                  label="Прізвище*"
                />

                <MainInput
                  name="companyName"
                  placeholder="Компанія*"
                  label="Компанія*"
                />

                <MainInput
                  name="phone"
                  placeholder="Номер мобільного телефону*"
                  label="Номер мобільного телефону*"
                  isMask={true}
                />

                <MainInput
                  name="email"
                  placeholder="Адреса електронної пошти*"
                  label="Адреса електронної пошти*"
                />

                <MainInput
                  name="otherField"
                  placeholder="Якщо бажаєте, то поставте своє запитання та вкажіть кому саме и б хотіли його поставити"
                  label="Ваше запитання"
                  multiline
                />

                <Stack direction="row" style={{ paddingBottom: "40px" }}>
                  {values.agreeToTerms ? (
                    <img
                      onClick={() => {
                        setFieldValue("agreeToTerms", !values.agreeToTerms);
                      }}
                      src={CheckBoxChecked}
                      alt=""
                      width="24"
                      height="24"
                    />
                  ) : (
                    <img
                      onClick={() => {
                        setFieldValue("agreeToTerms", !values.agreeToTerms);
                      }}
                      src={ImgCheckBox}
                      alt=""
                      width="24"
                      height="24"
                    />
                  )}

                  <Field
                    type="checkbox"
                    name="agreeToTerms"
                    style={{ display: "none" }}
                  />

                  <Typography
                    variant="body2"
                    color="white"
                    sx={{
                      fontSize: xs ? "0.813rem" : "0.938rem",
                      fontLine: "1.172rem",
                      fontFamily: "'ManropeMedium', sans-serif",
                      paddingLeft: "19px",
                    }}
                  >
                    Реєструючись, я повністю погоджуюся з{" "}
                    <span style={{ color: "#FCB02D" }}>
                      {" "}
                      Політикою конфіденційності Uspacy
                    </span>
                  </Typography>
                </Stack>

                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      textTransform: "none",
                      backgroundColor: "#452AF4",
                      color: !isValid || !dirty ? "#FFFFFF66" : "#FFFFFF",
                      borderRadius: "100px",
                      padding: "10px 20px",
                      boxShadow: "none",
                      height: xs ? "52px" : sm ? "55px" : "58px",
                      fontFamily: "'MontserratMedium', sans-serif",
                      fontSize: xs ? "0.75rem" : sm ? "0.875rem" : "1rem",
                      fontLight: "0.885rem",
                      width: xs ? "145px" : sm ? "180px" : "213px",
                      "&:hover": {
                        backgroundColor: "#FCB02D",
                        color: "#FFFFFF",
                      },
                      "&.Mui-disabled": {
                        backgroundColor: "#452AF4",
                        color: "#FFFFFF66",
                      },
                    }}
                  >
                    Зареєструватися
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </>
      </Box>
    </Container>
  );
};

export default Registration;
