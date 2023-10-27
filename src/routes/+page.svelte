<script lang="ts">
	import BestAthlete from '$lib/components/bestAthlete.svelte';
	import OverallScore from '$lib/components/overallScore.svelte';
		import Scoreboard from '$lib/components/scoreboard.svelte';

	import {overallScore, maleAthletes, femaleAthletes, tableTennisMensDoubles, tableTennisMensSingles, badmintonMensSingles, badmintonMensDoubles, football, netball, carromMensDoubles, carromMixDoubles1, carromMixDoubles2, sprint, esports, bowling, medivestGotTalent, badmintonWomensSingles, badmintonWomensDoubles, badmintonOverall, tableTennisWomensSingles, tableTennisWomensDoubles, tableTennisOverall,  } from '$lib/data';

	let currentView = 0


</script>

<div class="wrapper">
	<div class="px-4">

		<div class="flex justify-center tabs">
			<a on:click={() => currentView = 0} class="tab {currentView === 0 && 'tab-active'}">Overall</a> 
			<a on:click={() => currentView = 1} class="tab {currentView === 1 && 'tab-active'}">Athletes</a> 
			<a on:click={() => currentView = 2} class="tab {currentView === 2 && 'tab-active'}">Table Tennis</a>
			<a on:click={() => currentView = 3} class="tab {currentView === 3 && 'tab-active'}">Badminton</a>
			<a on:click={() => currentView = 4} class="tab {currentView === 4 && 'tab-active'}">Bowling</a>
			<a on:click={() => currentView = 5} class="tab {currentView === 5 && 'tab-active'}">Football</a>
			<a on:click={() => currentView = 6} class="tab {currentView === 6 && 'tab-active'}">Netball</a>
			<a  on:click={() => currentView = 7} class="tab {currentView === 7 && 'tab-active'}">Carrom</a>
			<a  on:click={() => currentView = 8} class="tab {currentView === 8 && 'tab-active'}">100m Sprint</a>
			<a  on:click={() => currentView = 9} class="tab {currentView === 9 && 'tab-active'}">E-Sports</a>
			<a  on:click={() => currentView = 10} class="tab {currentView === 10 && 'tab-active'}">Medivest Got Talent</a>
		  </div>


		  <div class="mt-8">


			{#if currentView === 0}
				<OverallScore name="Overall Score"  data={overallScore} />

			{:else if currentView === 1}
	
					<BestAthlete name="Male Athletes"  data={maleAthletes} />
	
		
				<div class="mt-12">
					<BestAthlete name="Female Athletes"  data={femaleAthletes} />			
				</div>

			
			{:else if currentView === 2}	
				<OverallScore name="Table Tennis (Overall)"  data={tableTennisOverall} />
	
				<div class="mt-12">
					<Scoreboard name="Table Tennis (Men's Singles)"  data={tableTennisMensSingles} />
				</div>


				<div class="mt-12">
					<Scoreboard name="Table Tennis (Men's Doubles)"  data={tableTennisMensDoubles} />
				</div>


				<div class="mt-12">
					<Scoreboard name="Table Tennis (Women's Singles)"  data={tableTennisWomensSingles} />
				</div>

				<div class="mt-12">
					<Scoreboard name="Table Tennis (Women's Doubles)"  data={tableTennisWomensDoubles} />
				</div>


			{:else if currentView === 3}

					<OverallScore name="Badminton (Overall)"  data={badmintonOverall} />

					<div class="mt-12">
						<Scoreboard name="Badminton (Men's Singles)"  data={badmintonMensSingles} />
					</div>

					<div class="mt-12">
						<Scoreboard name="Badminton (Women's Singles)"  data={badmintonWomensSingles} />
					</div>
	
					<div class="mt-12">
						<Scoreboard name="Badminton (Men's Doubles)"  data={badmintonMensDoubles} />
					</div>

					<div class="mt-12">
						<Scoreboard name="Badminton (Women's Doubles)"  data={badmintonWomensDoubles} />
					</div>


			{:else if currentView === 4}

				<Scoreboard name="Bowling"   data={bowling} />
	
	

			{:else if currentView === 5}

				<Scoreboard name="Football"  data={football} />
	
	

			{:else if currentView === 6}
		
				<Scoreboard name="Netball"  data={netball} />
	
	

			{:else if currentView === 7}
			
				<Scoreboard name="Carrom (Men's Doubles)"  data={carromMensDoubles} />

	
			<div class="mt-12">
				<Scoreboard name="Carrom (Mix Doubles 1)"   data={carromMixDoubles1} />
			</div>
	
			<div class="mt-12">
				<Scoreboard name="Carrom (Mix Doubles 2)" data={carromMixDoubles2} />
			</div>
	
			{:else if currentView === 8}

				<Scoreboard name="100m Sprint" data={sprint} />

	
			{:else if currentView === 9}

				<Scoreboard name="E-Sports" data={esports} />

	
			{:else if currentView === 10}

				<Scoreboard name="Medivest Got Talent" data={medivestGotTalent} />


			{/if}
		  </div>





	</div>
</div>
