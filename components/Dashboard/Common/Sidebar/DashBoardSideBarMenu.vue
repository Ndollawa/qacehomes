<template>
	<SidebarContent class="text-base scrollbar-none mt-5">
		<SidebarMenu>
				<SidebarMenuItem>
					<SidebarMenuButton as-child>
						<NuxLink to="" class="ml-2">
							<!-- <component :is="" /> -->
							<MdDashboard/>
							<span>{{ "Dashboard"}}</span>
						</NuxLink>
					</SidebarMenuButton>
				</SidebarMenuItem> 
			</SidebarMenu>
    <SidebarSeparator  class="w-[90%] m-auto relative my-1 border-1 rounded-md bg-gray-950 opacity-35"/>
		<SidebarGroup v-for="(sideMenu,i) in links?.navMain" :key="i">
			<SidebarGroupLabel class="uppercase opacity-50 text-sm">{{ sideMenu?.groupLabel }}</SidebarGroupLabel>
			<SidebarMenu v-for="(m,j) in sideMenu.menus" :key="j">
				<Collapsible
				v-if="m?.children?.length"
				
				>
					<SidebarMenuItem
					as-child
					:default-open="m.isActive"
					class="group/collapsible">
						<CollapsibleTrigger as-child>
							<SidebarMenuButton :tooltip="m.title">
								<component :is="m.icon" />
								<span>{{ m.title }}</span>
								<ChevronRight
									class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
								/>
							</SidebarMenuButton>
						</CollapsibleTrigger>
						<CollapsibleContent>
							<SidebarMenuSub>
								<SidebarMenuSubItem
									v-for="subItem in m.children"
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
				<SidebarMenuItem v-else>
					<SidebarMenuButton  as-child>
						<NuxtLink :to="m.url">
							<component :is="m.icon" />
							<span>{{ m.title }}</span>
						</NuxtLink>
					</SidebarMenuButton>
				</SidebarMenuItem>
			</SidebarMenu>
    <SidebarSeparator  class="w-[90%] m-auto relative border-1 rounded-md bg-gray-950 opacity-35 mt-5" />
		</SidebarGroup>
	</SidebarContent>
</template>

<script setup lang="ts">
import {
  Bot,
  ChevronRight,
  Folder,
  Forward,
  MoreHorizontal,
  Trash2,
} from 'lucide-vue-next'
import { MdDashboard } from '@kalimahapps/vue-icons';
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
	SidebarSeparator,
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
