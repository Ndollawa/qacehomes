<template>
    <SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<DropdownMenu>
							<DropdownMenuTrigger as-child>
								<SidebarMenuButton
									size="lg"
									class="data-[state=open]:bg-sidebar-primary data-[state=open]:text-sidebar-accent-foreground"
								>
									<div
										class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
									>
										<component :is="activeTeam.logo" class="size-4" />
									</div>
									<div
										class="grid flex-1 text-left text-sm leading-tight"
									>
										<span class="truncate font-semibold">{{
											activeTeam.name
										}}</span>
										<span class="truncate text-xs">{{
											activeTeam.plan
										}}</span>
									</div>
									<ChevronsUpDown class="ml-auto" />
								</SidebarMenuButton>
							</DropdownMenuTrigger>
							<DropdownMenuContent
								class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
								align="start"
								side="bottom"
								:side-offset="4"
							>
								<DropdownMenuLabel
									class="text-xs text-muted-foreground"
								>
									Teams
								</DropdownMenuLabel>
								<DropdownMenuItem
									v-for="(team, index) in links.teams"
									:key="team.name"
									class="gap-2 p-2"
									@click="setActiveTeam(team)"
								>
									<div
										class="flex size-6 items-center justify-center rounded-sm border"
									>
										<component
											:is="team.logo"
											class="size-4 shrink-0"
										/>
									</div>
									{{ team.name }}
									<DropdownMenuShortcut
										>⌘{{ index + 1 }}</DropdownMenuShortcut
									>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem class="gap-2 p-2">
									<div
										class="flex size-6 items-center justify-center rounded-md border bg-background"
									>
										<Plus class="size-4" />
									</div>
									<div class="font-medium text-muted-foreground">
										Add team
									</div>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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
import { ref } from "vue";
import { links } from "./links";

const activeTeam = ref(links.teams[0]);

function setActiveTeam(team: (typeof links.teams)[number]) {
	activeTeam.value = team;
}
</script>

<style scoped>

</style>