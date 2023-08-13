const { default: mongoose } = require("mongoose");

const TopicSchema=new mongoose.Schema({
    title:String,
    description:String,
    },
    {
        timestamps:true,
    }
)
const Topic=mongoose.models.Topic || mongoose.model("Topic",TopicSchema);
export default Topic;