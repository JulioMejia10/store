import { mdiWhatsapp } from "@mdi/js";
import Icon from "@mdi/react";

function WhatsAppIcon() {
    return (
        <Icon
            path={mdiWhatsapp}
            size={1.2}
            className="text-white-500"
        />
    );
}

export default WhatsAppIcon;
