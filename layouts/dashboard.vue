<template>
	<SidebarProvider>
		<DashboardSidebar />
		<SidebarInset>
			<!-- <DashboardHeader /> -->
			<slot />
		</SidebarInset>
	</SidebarProvider>
</template>

<script setup lang="ts">
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

//   const cookieStore =  cookies()
//   const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"
</script>
