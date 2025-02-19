<template>
	<Sidebar collapsible="icon" class="bg-primary text-white group-data-[collapsible=icon]:p-0 p-3">
		<DashboardSidebarHeader/>
		<DashboardSidebarMenu />
		 <!-- <DashboardSidebarFooter />  -->
		<SidebarRail />
	</Sidebar>
</template>

<script setup lang="ts">
import { Sidebar, SidebarRail } from '@/components/ui/sidebar';


</script>

<style scoped></style>
