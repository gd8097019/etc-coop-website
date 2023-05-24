<template>
	<Layout>
		<template #header>
			<section class="miningNavSection">
				<Navbar></Navbar>
				<div class="mainContainer miningContainer">
					<div class="miningHeroContent">
						<h1>Mining on ETC</h1>
					</div>
				</div>
			</section>
		</template>

		<template #main>
			<!-- mining in etc paragraphs section starts here -->
			<section class="miningParaSection">
				<div class="miningParaContainer">
					<p>
						Mining on Ethereum Classic (ETC) is similar to mining on other
						blockchain platforms. It involves the use of computers to solve
						computationally intensive puzzles, which are required to validate
						transactions and stamp new blocks on the blockchain.
					</p>
				</div>
			</section>
			<!-- mining in etc paragraphs section ends here -->

			<!-- what you need section starts here -->
			<section class="whatYouNeedSection">
				<div class="whatYouNeedContainer">
					<span class="secBadge">Mining</span>
					<div class="heading">
						<h1>What you need to mine ETC</h1>
						<p>
							The mining process in ETC is based on a proof-of-work (PoW)
							consensus algorithm, called Nakamoto Consensus, which means that
							miners must compete to solve the computational puzzles to add new
							blocks to the blockchain. The first miner to solve the problem and
							stamp the new block is rewarded with newly minted ETC coins as
							well as transaction fees
						</p>
					</div>
					<div class="whatYouNeedContent">
						<div class="whatYouNeedInnerContent">
							<div class="whatYouNeedText text-end">
								<h4>Specialized Hardware</h4>
								<p>
									To mine ETC, miners need to have specialized hardware such as
									ASICs (Application-Specific Integrated Circuits) or GPUs
									(Graphics Processing Units)
								</p>
							</div>
							<div class="whatYouNeedImg">
								<img src="@/assets/images/etc-start.png" alt="" />
							</div>
							<div class="whatYouNeedText text-start">
								<h4>Specialized Software</h4>
								<p>
									Miners need to have software that allows them to connect to
									the blockchain network
								</p>
							</div>
						</div>
						<div class="whatYouNeedText text-center">
							<h4>Computational power and electricity</h4>
							<p>
								Mining on ETC requires significant aggregate capital investment
								in computational power and electricity by the mining segment.
								This is the basis of the security model of the network and is
								the key component that guarantees the benefits of
								decentralization, permissionlessness, censorship resistance, and
								immutability.
							</p>
						</div>
					</div>
				</div>
			</section>
			<!-- what you need section ends here -->

			<!-- popular mining starts here -->
			<div class="popularMining">
				<p>
					Mining ETC is a popular and lucrative activity among miners who
					believe in the long-term potential of the platform and its
					cryptocurrency, and who are aligned with its decentralist principles.
				</p>
			</div>
			<!-- popular mining ends here -->
		</template>
	</Layout>
</template>

<script>
import Layout from "@/layout/Layout.vue";
import Navbar from "@/components/Navbar.vue";

export default {
	components: {
		Layout,
		Navbar,
	},
};
</script>
