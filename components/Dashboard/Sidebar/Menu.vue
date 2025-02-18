<template>
	<SidebarContent>
		<SidebarGroup>
			<SidebarGroupLabel>Platform</SidebarGroupLabel>
			<SidebarMenu>
				<Collapsible
					v-for="item in links.navMain"
					:key="item.title"
					as-child
					:default-open="item.isActive"
					class="group/collapsible"
				>
					<SidebarMenuItem>
						<CollapsibleTrigger as-child>
							<SidebarMenuButton :tooltip="item.title">
								<component :is="item.icon" />
								<span>{{ item.title }}</span>
								<ChevronRight
									class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
								/>
							</SidebarMenuButton>
						</CollapsibleTrigger>
						<CollapsibleContent>
							<SidebarMenuSub>
								<SidebarMenuSubItem
									v-for="subItem in item.items"
									:key="subItem.title"
								>
									<SidebarMenuSubButton as-child>
										<a :href="subItem.url">
											<span>{{ subItem.title }}</span>
										</a>
									</SidebarMenuSubButton>
								</SidebarMenuSubItem>
							</SidebarMenuSub>
						</CollapsibleContent>
					</SidebarMenuItem>
				</Collapsible>
			</SidebarMenu>
		</SidebarGroup>
		<SidebarGroup class="group-data-[collapsible=icon]:hidden">
			<SidebarGroupLabel>Projects</SidebarGroupLabel>
			<SidebarMenu>
				<SidebarMenuItem v-for="item in links.projects" :key="item.name">
					<SidebarMenuButton as-child>
						<a :href="item.url">
							<component :is="item.icon" />
							<span>{{ item.name }}</span>
						</a>
					</SidebarMenuButton>
					<DropdownMenu>
						<DropdownMenuTrigger as-child>
							<SidebarMenuAction show-on-hover>
								<MoreHorizontal />
								<span class="sr-only">More</span>
							</SidebarMenuAction>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							class="w-48 rounded-lg"
							side="bottom"
							align="end"
						>
							<DropdownMenuItem>
								<Folder class="text-muted-foreground" />
								<span>View Project</span>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Forward class="text-muted-foreground" />
								<span>Share Project</span>
							</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<Trash2 class="text-muted-foreground" />
								<span>Delete Project</span>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</SidebarMenuItem>
				<SidebarMenuItem>
					<SidebarMenuButton class="text-sidebar-foreground/70">
						<MoreHorizontal class="text-sidebar-foreground/70" />
						<span>More</span>
					</SidebarMenuButton>
				</SidebarMenuItem>
			</SidebarMenu>
		</SidebarGroup>
	</SidebarContent>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarInset,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	SidebarProvider,
	SidebarRail,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { links } from "./links";
</script>

<style scoped></style>
