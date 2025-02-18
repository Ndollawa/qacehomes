<template>
	<Card
		class="w-11/12 md:w-9/12 xl:w-5/12 m-auto pb-10 sm:pb-5 shadow-md bg-slate-50"
	>
		<CardHeader>
			<CardTitle>Card Title</CardTitle>
			<CardDescription>Card Description</CardDescription>
		</CardHeader>
		<CardContent> Card Content </CardContent>
		<CardFooter> Card Footer </CardFooter>
	</Card>
</template>

<script setup lang="ts">
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
</script>
