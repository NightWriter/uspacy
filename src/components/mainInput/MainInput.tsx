import React, { FC, useState } from "react";
import { TextField, FormHelperText } from "@mui/material";
import { Field, FieldProps } from "formik";
import InputMask from "@mona-health/react-input-mask";
import useMediaQuery from "@mui/material/useMediaQuery";

interface Input {
  name: any;
  placeholder: string;
  label: string;
  type?: string;
  isMask?: boolean;
  multiline?: boolean;
}

const MainInput: FC<Input> = ({
  name,
  placeholder,
  label,
  type = "text",
  isMask = false,
  multiline = false,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const sm = useMediaQuery("(max-width:900px)");
  const xs = useMediaQuery("(max-width:600px)");

  return (
    <div style={{ paddingBottom: xs ? "23px" : "29px" }}>
      <Field name={name}>
        {({ field, meta }: FieldProps) => {
          const hasValue = field.value ? field.value.length > 0 : false;
          return (
            <>
              {isMask ? (
                <div style={{ position: "relative" }}>
                  <InputMask
                    mask="+38 (999) 999 99 99"
                    {...field}
                    onFocus={() => setIsFocused(true)}
                    onBlur={(e: any) => {
                      setIsFocused(false);
                      field.onBlur(e);
                    }}
                    onChange={field.onChange}
                    style={{
                      border:
                        meta.touched && meta.error ? "1px solid #F7696B" : "",
                      color: "green",
                    }}
                  >
                    <TextField
                      id={name}
                      fullWidth
                      label={
                        (meta.touched && meta.error) || hasValue || isFocused
                          ? label
                          : ""
                      }
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      sx={{
                        width: "100%",
                        borderRadius: "4px",

                        backgroundColor: "#FFFFFF0A",
                        "& .MuiOutlinedInput-root": {
                          padding: "0",
                          "& fieldset": {
                            borderColor: "transparent",
                          },
                          "&:hover fieldset": {
                            borderColor:
                              meta.touched && meta.error
                                ? "#F7696B"
                                : "#7C69F7",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor:
                              meta.touched && meta.error
                                ? "#F7696B"
                                : "#7C69F7",
                          },
                        },
                        "& .MuiInputBase-input": {
                          color: "#FFFFFF",
                          padding: xs ? "10.5px 12px" : "16.5px 14px",
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          transform: "translate(10px, -7px) scale(0.75)",
                          padding: "0 6px",
                          color: "#FFFFFF",
                          background:
                            meta.touched && meta.error ? "#F7696B" : "#7C69F7",
                          borderRadius: "4px",
                          margin: 0,
                        },
                        "& .MuiInputLabel-shrink": {
                          transform: "translate(10px, -7px) scale(0.75)",
                          padding: "0 6px",
                          background:
                            meta.touched && meta.error ? "#F7696B" : "#7C69F7",
                          borderRadius: "4px",
                          color: "#FFFFFF",
                        },
                        "& .MuiInputBase-input::placeholder": {
                          color: "#FFFFFF66",
                        },
                      }}
                    />
                  </InputMask>
                  {(!isFocused && meta.error && !hasValue) ||
                  (!isFocused && !meta.error && !hasValue) ? (
                    <p
                      style={{
                        position: "absolute",
                        bottom: xs ? "14px" : "19px",
                        left: xs ? "12px" : "14px",
                        zIndex: "1",
                        color:
                          meta.touched && meta.error && hasValue && isFocused
                            ? "red"
                            : "#FFFFFF36",
                        fontFamily: "'ManropeMedium', sans-serif",
                        fontSize: xs ? "0.75rem" : sm ? "0.875rem" : "1rem",
                        pointerEvents: "none",
                      }}
                    >
                      {placeholder}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              ) : (
                <TextField
                  multiline={multiline}
                  rows={multiline ? 2 : 1}
                  {...field}
                  id={name}
                  label={
                    (meta.touched && meta.error) || hasValue || isFocused
                      ? label
                      : ""
                  }
                  placeholder={placeholder}
                  variant="outlined"
                  error={meta.touched && Boolean(meta.error)}
                  fullWidth
                  type={type}
                  onFocus={() => setIsFocused(true)}
                  onBlur={(e) => {
                    setIsFocused(false);
                    field.onBlur(e);
                    console.log("herere email", e);
                  }}
                  onChange={field.onChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  sx={{
                    fontFamily: "'ManropeMedium', sans-serif",
                    width: "100%",

                    borderRadius: "4px",
                    color: "white",
                    backgroundColor: "#FFFFFF0A",
                    "& .MuiOutlinedInput-root": {
                      padding: "0",
                      "& fieldset": {
                        borderColor: "transparent",
                      },
                      "&:hover fieldset": {
                        borderColor:
                          meta.touched && meta.error ? "#F7696B" : "#7C69F7",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor:
                          meta.touched && meta.error ? "#F7696B" : "#7C69F7",
                      },
                    },
                    "& .MuiInputBase-input": {
                      color: "white",
                      padding: xs ? "10.5px 12px" : "16.5px 14px",
                    },

                    "& .MuiInputLabel-root.Mui-focused": {
                      transform: "translate(10px, -7px) scale(0.75)",
                      padding: "0 6px",
                      color: "#FFFFFF",
                      background:
                        meta.touched && meta.error ? "#F7696B" : "#7C69F7",
                      borderRadius: "4px",
                      margin: 0,
                    },
                    "& .MuiInputLabel-shrink": {
                      transform: "translate(10px, -7px) scale(0.75)",
                      padding: "0 6px",
                      background:
                        meta.touched && meta.error ? "#F7696B" : "#7C69F7",
                      borderRadius: "4px",
                      color: "#FFFFFF",
                      fontFamily: "'ManropeMedium', sans-serif",
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: "#FFFFFF66",
                      fontFamily: "'ManropeMedium', sans-serif",
                      fontSize: xs ? "0.75rem" : sm ? "0.875rem" : "1rem",
                    },
                  }}
                />
              )}
              {meta.touched && meta.error && (
                <FormHelperText
                  error
                  sx={{
                    textAlign: "right",
                    color: "#FFFFFF",
                    fontFamily: "'ManropeMedium', sans-serif",
                  }}
                >
                  {meta.error}
                </FormHelperText>
              )}
            </>
          );
        }}
      </Field>
    </div>
  );
};

export default MainInput;
