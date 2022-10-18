export const customStyles = {
  singleValue : (styles : Record<string,any>) => ({
    ...styles,
    color : "#94a3b8",
    "fontWeight" : "400"
  }),
  control: (styles: Record<string, any>) => ({
    ...styles,
    width: "100%",
    maxWidth: "14rem",
    minWidth: "12rem",
    borderRadius: "5px",
    color: "#94a3b8",
    fontSize: "0.8rem",
    lineHeight: "1.75rem",
    backgroundColor: "rgb(30 41 59 / 1)",
    cursor: "pointer",
    border: "1px solid rgb(0 0 0 / 1)",
    boxShadow: "5px 5px 0px 0px rgba(0,0,0);",
    ":hover": {
      border: "1px solid #94a3b8",
      boxShadow: "none",
    },
  }),
  option: (styles :Record<string,any>) => {
    return {
      ...styles,
      color: "#94a3b8",
      fontSize: "0.8rem",
      lineHeight: "1.75rem",
      "fontWeight" : "400",
      width: "100%",
      background: "#0f172a",
      ":hover": {
        backgroundColor: "rgb(243 244 246)",
        color: "#0f172a",
        cursor: "pointer",
      },
    };
  },
  menu: (styles :Record<string,any>) => {
    return {
      ...styles,
      backgroundColor: "#1e293b",
      maxWidth: "14rem",
      border: "2px solid #94a3b8",
      borderRadius: "5px",
      boxShadow: "5px 5px 0px 0px rgba(0,0,0);",
    };
  },

  placeholder: (defaultStyles: Record<string, any>) => {
    return {
      ...defaultStyles,
      color: "#94a3b8",
      fontSize: "0.8rem",
      lineHeight: "1.75rem",
    };
  },
};
