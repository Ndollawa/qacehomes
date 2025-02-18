<template>
	<SidebarProvider>
		<DashboardCommonSidebar />
		<SidebarInset>
			<DashboardCommonHeader/>
			<slot/>
		</SidebarInset>
	</SidebarProvider>
</template>

<script setup lang="ts">
import { Separator } from "@/components/ui/separator";
</script>
