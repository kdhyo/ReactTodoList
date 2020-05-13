import React from "react";
import "./App.css";
import { TextField, Typography, Paper } from "@material-ui/core";
import {
  KeyboardDatePicker,
  KeyboardDateTimePicker,
} from "@material-ui/pickers";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      startDate: new Date(),
      startTime: new Date(),
      endDate: null,
      endTime: null,
    };
  }

  handleChange = (e) => {
    let obj = e.target.name;
    console.log(e);
    this.setState({
      [obj]: e.target.value,
    });
  };

  DateChange = (e) => {
    console.log(e);
    this.setState({
      startDate: e,
    });
  };

  TimeChange = (e) => {
    console.log(e);
    this.setState({
      startTime: e,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">Todo List</div>
        <Paper
          className="input_area"
          variant="outlined"
          style={{ padding: "10px" }}
        >
          <TextField
            label="제목"
            size="normal"
            margin="normal"
            name="title"
            value={this.state.title}
            fullWidth
            required
            onChange={this.handleChange}
          />
          <TextField
            label="상세내용"
            size="normal"
            margin="normal"
            name="content"
            fullWidth
            required
            onChange={this.handleChange}
          />
          <KeyboardDatePicker
            disableToolbar
            placeholder="10/10/2018"
            name="startDate"
            value={this.state.startDate}
            onChange={this.DateChange}
            variant="inline"
            format="yyyy/MM/DD"
            margin="normal"
            label="시작 예정일"
            style={{ width: "50%" }}
            KeyboardButtonProps={{ "aria-label": "change time" }}
          />
          <KeyboardDateTimePicker
            margin="normal"
            label="시작시간"
            variant="inline"
            name="startTime"
            format="LT"
            value={this.state.startDate}
            onChange={this.TimeChange}
            style={{ width: "50%" }}
            KeyboardButtonProps={{ "aria-label": "change time" }}
            locale="ko"
          />
        </Paper>
        <div className="list_area">리스트 영역</div>
        <Typography variant="body2" color="textSecondary" align="center">
          {`Copyright ⓒ 김동효 ${new Date().getFullYear()}.`}
        </Typography>
      </div>
    );
  }
}

export default App;
