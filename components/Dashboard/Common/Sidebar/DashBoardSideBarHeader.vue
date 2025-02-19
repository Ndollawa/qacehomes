<template>
    <SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
								<SidebarMenuButton
									size="lg"
									class="data-[state=open]:bg-sidebar-primary data-[state=open]:text-sidebar-accent-foreground pl-4"
								>
									<Logo showFullLogo width="27" height="27"/>
								
								 <div class="group-data-[collapsible=icon]:hidden ml-auto h-7 w-7 rounded-full grid grid-cols-1 place-items-center bg-primary-hover relative" @click="toggleSidebar"><ChevronLeft class="w-4"/></div>
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
import { useSidebar } from "@/components/ui/sidebar"
import { ref } from "vue";
import { ChevronsUpDown, ChevronLeft } from "lucide-vue-next";
import Logo from "@/components/Logo.vue"

const {toggleSidebar} = useSidebar()
</script>

<style scoped>

</style>