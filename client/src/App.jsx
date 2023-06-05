import { Box, Button, Heading, Input, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const App = () => {
  const [file, setFile] = useState();
  const [url, setUrl] = useState();
  const [fileName, setFileName] = useState();

  const fileRef = useRef();

  useEffect(() => {
    file ? setFileName(file.name) : "";
  }, [file]);

  const handleChangeFile = (e) => {
    setFile(e.target.files[0]);
  };

  const submit = async () => {
    const data = new FormData();
    data.append("name", file.name);
    data.append("file", file);
    const res = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/api/uploads`,
      data
    );
    setUrl(res.data);
  };

  return (
    <>
      <Stack
        h={"99.5vh"}
        bgColor={"blackAlpha.900"}
        color={"whitesmoke"}
        alignItems={"center"}
        py={"20"}
        px={"4"}
        gap={"10"}
      >
        <Heading>Upload Media and Get Link to share !</Heading>
        <Input
          type="file"
          onChange={(e) => handleChangeFile(e)}
          ref={fileRef}
          display={"none"}
        />
        <Box>
          <Button
            size={"lg"}
            bgColor={"blue.300"}
            onClick={() => {
              fileRef.current.click();
            }}
            w={"60"}
          >
            {" "}
            Upload File
          </Button>
          <Text mt={"2"}>Selected File : {fileName}</Text>
        </Box>
        <Button size={"lg"} onClick={submit} w={"60"}>
          Submit
        </Button>
        <Box borderBottom={"2px solid blue"} pb={"2"} wordBreak={"break-word"}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </a>
        </Box>
      </Stack>
    </>
  );
};

export default App;
