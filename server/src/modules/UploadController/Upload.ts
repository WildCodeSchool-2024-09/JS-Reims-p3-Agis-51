const uploadFilePermission = require("../middleware/uploadFilePermission");
const fileModel = require("../models/fileModel");

async function UploadFileController(
  req: { userId: string; body: string },
  res: {
    status: (arg0: number) => {
      (): number;
      new (): number;
      json: {
        (arg0: {
          message: string;
          error: boolean;
          success: boolean;
          data?: string;
        }): void;
        new (): undefined;
      };
    };
  },
) {
  try {
    const sessionUserId = req.userId;

    if (!uploadFilePermission(sessionUserId)) {
      throw new Error("Permission denied");
    }

    const uploadFile = new fileModel(req.body);
    const saveFile = await uploadFile.save();

    res.status(201).json({
      message: "Fichier telecharé avec success",
      error: false,
      success: true,
      data: saveFile,
    });
  } catch (err) {
    res.status(400).json({
      message: "une erreur est survenue lors de l'enregistrement du fichier0",
      error: true,
      success: false,
    });
  }
}

export default UploadFileController;
