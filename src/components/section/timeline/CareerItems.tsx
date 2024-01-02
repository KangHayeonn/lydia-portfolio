import React, { useState, useEffect } from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { ITimelineItems } from "@/types/timeline";
import { FaMinus } from "react-icons/fa";

const TimelineItems = ({ data, time, lastCheck }: ITimelineItems) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(1);
    }, time);
    return () => {
      clearInterval(timer);
    };
  }, [time]);

  return (
    <TimelineItem>
      <TimelineOppositeContent style={{ flex: 0.2 }}>
        <Typography variant="body2" color="textSecondary">
          {data.date}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="primary" style={{ backgroundColor: "#906ff3" }}>
          {progress > 0 ? <data.icon /> : <FaMinus />}
        </TimelineDot>
        {!lastCheck && data.detail && <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Paper
          elevation={3}
          className={`animate__animated ${
            progress > 0 ? "animate__flipInX" : ""
          }`}
        >
          <div className="timeline__content--title">
            {progress > 0 && data.title}
          </div>
          {data.detail && progress > 0 && <Divider />}
          {data.detail && progress > 0 && (
            <div className="timeline__content--detail">{data.detail}</div>
          )}
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};

export default TimelineItems;
