<template>
	<router-view />
	<vue-cookie-accept-decline
		:debug="false"
		:disableDecline="true"
		:showPostponeButton="false"
		position="bottom-left"
		transitionName="slideFromBottom"
		type="floating"
	>
		<!-- Optional -->
		<template #postponeContent>&times;</template>

		<!-- Optional -->
		<template #message>
			We use cookies to ensure you get the best experience on our website.
			<a href="/cookie-policy" target="_blank">Learn More...</a>
		</template>

		<!-- Optional -->
		<template #declineContent>Opt Out</template>

		<!-- Optional -->
		<template #acceptContent>Got It!</template>
	</vue-cookie-accept-decline>
</template>
