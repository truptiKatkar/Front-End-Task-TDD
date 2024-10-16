import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Text,
  TextInput,
} from "@mantine/core";
import { useState } from "react";

function StringCalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const add = (numbers: string) => {
    return 
  };

  const handleCalculate = () => {
    try {
      const sum: any = add(input);
      setResult(sum);
    } catch (error: any) {
      setResult(error.message);
    }
  };

  return (
    <Container fluid my="md" h={"100vh"}>
      <Grid justify="center" align="center" h={"100%"}>
        <Grid.Col span={4}>
          <Paper
            className="users-form"
            shadow="md"
            radius="md"
            p="xl"
            withBorder
          >
            <Text size="lg" fw={500}>
              Welcome to Mantine, with
            </Text>
            <Box px={30}>
              <TextInput
                value={input}
                onChange={(e) => setInput(e.target.value)}
                mb={10}
                label="Numbers"
                placeholder="Enter numbers"
                required
                w={"100%"}
              />

              <Box className="text-center">
                <Button onClick={handleCalculate} fullWidth>
                  Calculate
                </Button>
                {result !== null && <p>Result: {result}</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}
              </Box>
            </Box>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default StringCalculator;
