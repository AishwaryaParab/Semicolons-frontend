import {Button} from "@mui/material"; 

const CustomButton = ({fullWidth, type, backgroundColor, color, icon, title, handleClick}) => {
  return (
    <Button
    //   disabled={disabled}
      type={type === "submit" ? "submit" : "button"}
      sx={{
        // flex: fullWidth ? 1 : 'unset',
        padding: "10px 15px",
        width: "fit-content",
        height: "fit-content",
        minWidth: 130,
        backgroundColor,
        color,
        fontSize: 16,
        fontWeight: 600,
        gap: "10px",
        textTransform: 'capitalize',
        '&:hover': {
          opacity: 0.9,
          backgroundColor
        }
      }}

      onClick={(e) => {handleClick(e)}}
    >
      {icon}
      {title}
    </Button>
  )
}

export default CustomButton