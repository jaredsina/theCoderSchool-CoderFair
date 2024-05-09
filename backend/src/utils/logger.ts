//If we wanted to start writing logs to a file or send them to an external logging service like graylog or papertrail we would only have to make changes here

const info = (message: string) => {
  console.log(message);
};

const error = (error: string) => {
  console.log(error);
};

export default { info, error };
