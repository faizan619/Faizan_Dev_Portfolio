const {username,password} = process.env;

export const connectionStr = 'mongodb+srv://'+username+':'+password+'@nextjsdb.ona9pmx.mongodb.net/portfolio?retryWrites=true&w=majority'