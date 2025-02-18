<template>
    <SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
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
					<SidebarTrigger  class="ml-auto" />
								</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import {
	SidebarHeader,
	SidebarInset,
	SidebarMenu,
	SidebarMenuItem,
	SidebarTrigger,
	SidebarMenuButton,
} from "@/components/ui/sidebar";
import { ref } from "vue";
import { links } from "./links";
import { ChevronsUpDown } from "lucide-vue-next";

const activeTeam = ref(links.teams[0]);

function setActiveTeam(team: (typeof links.teams)[number]) {
	activeTeam.value = team;
}
</script>

<style scoped>

</style>