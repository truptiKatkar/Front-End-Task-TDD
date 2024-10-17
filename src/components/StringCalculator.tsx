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

  const add = (numbers: string): number => {
    if (!numbers) return 0;

    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
      const delimiterEnd = numbers.indexOf("\n");
      delimiter = new RegExp(numbers.substring(2, delimiterEnd));
      numbers = numbers.substring(delimiterEnd + 1);
    }

    const numArray = numbers.split(delimiter).map((n) => parseInt(n, 10));
    const negativeNumbers = numArray.filter((n) => n < 0);
    if (negativeNumbers.length > 0) {
      throw new Error(
        `Negative numbers not allowed: ${negativeNumbers.join(", ")}`
      );
    }

    return numArray.reduce((sum, num) => sum + num, 0);
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
              Frontend TDD Assessment
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
