import chalk from "chalk";

const promptSchemaQrCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QrCode"),
    },
    {
        name: "type",
        description: chalk.yellow(
            "Escolha entre o tipo de QRCode(1- Normal ou (2- Terminal"
        ),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("escolha apena entre 1 e 2"),
        required: true,
    }
];

export default promptSchemaQrCode;