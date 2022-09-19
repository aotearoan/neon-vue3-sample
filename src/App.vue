<template>
  <neon-page>
    <template #top-nav>
      <neon-top-nav>
        <div class="top-nav">  
          <neon-logo />
          <neon-button
              name="dark-mode-toggle"
              icon="contrast"
              button-style="text"
              aria-label="light/dark toggle"
              @click="switchMode()"
              color="high-contrast"
              class="mode-link"
          />
        </div>
      </neon-top-nav>
    </template>
    <template #content>
      <neon-grid id="page-content" :layouts="layouts">
        <neon-grid-area id="content1">
          <neon-card>
            <neon-card-header>
              <h2>Section 1</h2>
            </neon-card-header>
            <neon-card-body>
              <p>Bacon ipsum dolor amet chuck chislic chicken venison sirloin. Ground round pig ham, t-bone tail shankle porchetta flank meatball boudin pork. Corned beef tenderloin swine, ribeye brisket porchetta cow cupim alcatra bresaola. Shankle boudin chuck pork belly ball tip, sausage porchetta cupim tri-tip pastrami tongue short ribs ham. Frankfurter biltong doner shankle pork loin meatball tail turkey short loin tri-tip porchetta beef jowl drumstick. Pork belly kevin short ribs ball tip pork meatball filet mignon tenderloin short loin chuck pancetta venison swine. Leberkas flank sirloin jowl prosciutto, tongue corned beef venison ball tip pork loin t-bone pork belly shank landjaeger.</p>
            </neon-card-body>
            <neon-card-footer>
              <neon-button label="Show alert" color="info" @click="moarAlerts()" />
            </neon-card-footer>
          </neon-card>
        </neon-grid-area>
        <neon-grid-area id="content2">
          <neon-card>
            <neon-card-header>
              <h2>Section 2</h2>
            </neon-card-header>
            <neon-card-body>
              <p>Bacon ipsum dolor amet chuck chislic chicken venison sirloin. Ground round pig ham, t-bone tail shankle porchetta flank meatball boudin pork. Corned beef tenderloin swine, ribeye brisket porchetta cow cupim alcatra bresaola. Shankle boudin chuck pork belly ball tip, sausage porchetta cupim tri-tip pastrami tongue short ribs ham. Frankfurter biltong doner shankle pork loin meatball tail turkey short loin tri-tip porchetta beef jowl drumstick. Pork belly kevin short ribs ball tip pork meatball filet mignon tenderloin short loin chuck pancetta venison swine. Leberkas flank sirloin jowl prosciutto, tongue corned beef venison ball tip pork loin t-bone pork belly shank landjaeger.</p>
            </neon-card-body>
            <neon-card-footer>
              <neon-button label="Show toast" color="success" @click="moarToast()" />
            </neon-card-footer>
          </neon-card>
        </neon-grid-area>
      </neon-grid>
      <neon-footer>
          <span class="neon-color-text-low-contrast copyright">&copy; Arcual AG {{ new Date().getFullYear() }}</span>
      </neon-footer>
      <!-- Global alert/toast portal -->
      <neon-alert></neon-alert>
    </template>
  </neon-page>
</template>

<script lang="ts" src="./App.ts"></script>
<style lang="scss" src="./App.scss"></style>
