import { Box, Button, Container, Grid, TextInput } from "@mantine/core";
import { useState } from "react";


function StringCalculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleCalculate = () => {

    }


    return (
        <Container fluid my="md" h={'100%'} >
            <Grid justify="center" h={'100%'}>
                <Grid.Col span={4} >
                    <Box px={30}>
                        <TextInput
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            mb={10}
                            label="Numbers"
                            placeholder="Enter numbers"
                            required
                            w={'100%'}
                        />

                        <Box className="text-center">
                            <Button fullWidth>Calculate</Button>
                        </Box>
                    </Box>
                </Grid.Col>
            </Grid>
        </Container>
    );
}

export default StringCalculator;