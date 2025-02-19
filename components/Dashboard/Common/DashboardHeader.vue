<template>
	<header
				class="flex h-16 shrink-0 shadow-md p-3 items-center bg-accent gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
			>
				<div class="flex items-center gap-2 px-4 w-full">
					 <div v-if="state==='collapsed'" class="cursor-pointer -ml-1 h-7 w-7 rounded-full grid grid-cols-1 place-items-center bg-primary relative text-white" @click="toggleSidebar"><ChevronRight  class="w-4"/></div>
					<Separator orientation="vertical" class="mr-2 h-4" />
					<DashboardNavbar/>
				</div>
			</header>
</template>

<script setup lang="ts">
import {
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { cn } from "@/app/utils/cn.utils";
import { ChevronRight } from "lucide-vue-next";
import { useSidebar } from "@/components/ui/sidebar"
const { state, toggleSidebar} = useSidebar()
</script>

<style scoped></style>
