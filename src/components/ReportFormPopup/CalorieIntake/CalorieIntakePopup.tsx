import React from "react";
import "../popup.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  Datepicker,
  DatepickerEvent,
} from "@meinefinsternis/react-horizontal-date-picker";
import { enUS } from "date-fns/locale";
import { AiFillDelete, AiOutlineClose } from "react-icons/ai";
import { TimeClock } from "@mui/x-date-pickers/TimeClock";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface CaloriIntakePopupProps {
  setShowCalorieIntakePopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const CalorieIntakePopup: React.FC<CaloriIntakePopupProps> = ({
  setShowCalorieIntakePopup,
}) => {
  const color = "#ffc20e";

  // const [date, setDate] = React.useState<any>(new Date());

  // const selectedDay = (val: any) => {
  //   console.log(val);
  // };
  //////////////////////
  const [date, setDate] = React.useState<Date | null>(null); // Single date state

  const handleChange = (d: DatepickerEvent) => {
    const [startValue, endValue] = d;
    // Use startValue as the selected date if not null
    setDate(startValue || endValue || null);
  };
  //////////////////////////////////////////

  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs("2022-04-17T15:30")
  );

  return (
    <div className="popupout">
      <div className="popupbox">
        <button
          className="close"
          onClick={() => {
            setShowCalorieIntakePopup(false);
          }}
        >
          <AiOutlineClose />
        </button>

        {/* <DatePicker
          getSelectedDay={selectedDay}
          endDate={100}
          selectDate={new Date()}
          labelFormat={"MMMM"}
          color={color}
        /> */}

        <Datepicker
          onChange={handleChange}
          locale={enUS}
          startValue={date}
          endValue={null}
        />

        <TextField
          id="outlined-basic"
          label="Food item name"
          variant="outlined"
          color="warning"
        />
        <TextField
          id="outlined-basic"
          label="Food item amount (in gms)"
          variant="outlined"
          color="warning"
        />
        <div className="timebox">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimeClock
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </LocalizationProvider>
        </div>
        <Button variant="contained" color="warning">
          Save
        </Button>
        <div className="hrline"></div>
        <div className="items">
          <div className="item">
            <h3>Apple</h3>
            <h3>100 gms</h3>
            <button>
              {" "}
              <AiFillDelete />
            </button>
          </div>
          <div className="item">
            <h3>Banana</h3>
            <h3>200 gms</h3>
            <button>
              {" "}
              <AiFillDelete />
            </button>
          </div>
          <div className="item">
            <h3>Rice</h3>
            <h3>300 gms</h3>
            <button>
              {" "}
              <AiFillDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalorieIntakePopup;
