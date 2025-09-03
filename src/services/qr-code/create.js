import prompt from "prompt";
import promptSchemaQrCode from "../../prompts-schema-qrcode/prompt-qrcode.js";
import handle from "./handler.js";

async function createQRCode() {
    prompt.get(promptSchemaQrCode, handle);
    prompt.start();
}

export default createQRCode;