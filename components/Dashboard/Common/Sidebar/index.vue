<template>
	<Sidebar collapsible="icon" class="bg-primary text-white">
		<DashboardCommonSidebarHeader/>
		<DashboardCommonSidebarMenu />
		<DashboardCommonSidebarFooter />
		<SidebarRail />
	</Sidebar>
</template>

<script setup lang="ts">
import { Sidebar, SidebarRail } from '@/components/ui/sidebar';


</script>

<style scoped></style>
