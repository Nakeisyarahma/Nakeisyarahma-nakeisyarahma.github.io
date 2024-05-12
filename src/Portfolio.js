import {Tabs} from "antd";
import React from "react";

export default function Portfolio() {
    return (
        <Tabs
            type='card'
            items={new Array(3).fill(null).map((_, i) => {
                const id = String(i + 1);
                return {
                    label: `Tab ${id}`,
                    key: id,
                    children: `Content of Tab Pane ${id}`,
                };
            })}
        />
    );
}
