import { Card, CardContent } from "@mui/material";
import { useState } from "react";
import { Avatar } from "../../Components/Avatar";

const NewPostForm = () => {
    const [isPostFormOpen, setIsPostFormOpen]=useState([])
    return (
        <Card>
            <CardContent className="p-4">
<Avatar>

</Avatar>
            </CardContent>
        </Card>
    );
};

export default NewPostForm;