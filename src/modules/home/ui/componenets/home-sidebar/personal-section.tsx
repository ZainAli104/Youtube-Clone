"use client";

import Link from "next/link";
import {HistoryIcon, ListVideoIcon, ThumbsUpIcon} from "lucide-react";

import {
    SidebarGroup,
    SidebarGroupContent, SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar";

const items = [
    {
        title: "History",
        url: "/playlists/history",
        icon: HistoryIcon,
        auth: true,
    },
    {
        title: "Liked videos",
        url: "/playlists/liked",
        icon: ThumbsUpIcon,
        auth: true,
    },
    {
        title: "All playlists",
        url: "/playlists",
        icon: ListVideoIcon,
    },
];

export const PersonalSection = () => {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>You</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item, index) => (
                        <SidebarMenuItem key={index}>
                            <SidebarMenuButton
                                tooltip={item.title}
                                asChild
                                isActive={item.url === window.location.pathname}
                                onClick={() => {
                                }}
                            >
                                <Link href={item.url} className="flex items-center gap-4">
                                    <item.icon/>
                                    <span className="text-sm">{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    );
};