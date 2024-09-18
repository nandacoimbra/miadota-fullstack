import jwt from "jsonwebtoken"

//pega o token e o converte no id do usuario 
const authMiddleware = async (req, res, next) => {
    // Captura o token do cabeçalho Authorization
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: "Não autorizado, faça o login novamente" });
    }

    // Extrai o token removendo 'Bearer '
    const token = authHeader.split(' ')[1];

    try {
        // Decodifica o token e extrai o ID do usuário
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        
        // Armazena o ID do usuário no req.user para uso posterior
        req.user = { _id: decodedToken.id };
        
        // Chama o próximo middleware ou rota
        next();

    } catch (error) {
        console.log(error);
        return res.status(401).json({ success: false, message: "Token inválido ou expirado" });
    }
};


export default authMiddleware