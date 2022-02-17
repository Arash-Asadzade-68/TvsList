context(
    `
    As a User
    I want to See the Tvs List and details
    So that i can filter, search and sort list items
    `, () => {
        it(`
        Scenario: View the site page
            Given I go to search for series
            When I search for game of thrones
            Then I can see the series view details
        `, () => {
            cy.visit("http://localhost:3000/")
            cy.getByComponentName("searchInput").type('game');
            cy.getByComponentName("TVsList").should('contain',"game-of-thrones")
            });
        it(`
        Scenario: View the site page
            Given I go to search for screen types
            When I search for tablet
            Then I can see the series that viewed in tablet
        `, () => {
            cy.visit("http://localhost:3000/");
            cy.getByComponentName("TVsList").should('be.visible')
            cy.get("p").contains("Series").first().parent().click();
            cy.getByComponentName("searchOption").contains('Screen').should('be.visible').click();
            cy.getByComponentName("searchInput").type('tab');
            cy.getByComponentName("TVsList").should('contain',"tablet")
            });
        it(`
        Scenario: View the site page
            Given I go to filter items based on screen types
            When choose the screen and click check an screen type
            Then I can see the filter results on list
        `, () => {
            cy.visit("http://localhost:3000/")
            cy.contains("Filters").click();
            cy.get('label').contains("Screen").should('be.visible').click();
            cy.get('label').contains("mobile").should('be.visible').click();
            cy.get('button').contains("Apply Filters").should('be.visible').click();
            cy.getByComponentName("TVsList").should('contain',"mobile")
            });
        it(`
        Scenario: View the site page
            Given I go to filter items based on date
            When choose the date and choose to date for showing result between that
            Then I can see the filter results on list
        `, () => {
            cy.visit("http://localhost:3000/")
            cy.contains("Filters").click();
            cy.get('label').contains("Date").should('be.visible').click();
            cy.get('div').contains("From").should('be.visible').next().type("2020-01-01");
            cy.get('div').contains("To").should('be.visible').next().type("2020-01-03");
            cy.get('button').contains("Apply Filters").should('be.visible').click();
            cy.getByComponentName("TVsList").should('contain',"2 Jan 2020")
            });
        it(`
        Scenario: View the site page
            Given I go to Sort items based on Views
            When Click on Desc Sort
            Then I can see the list details sorted based on views by Desc type
        `, () => {
            cy.visit("http://localhost:3000/")
            cy.getByComponentName("Desc").last().click();
            cy.getByComponentName("TVsListCard").eq(0).children().last().then(fisrtElement=>{
                
                const firstItemViewsInList = fisrtElement.text();
                cy.getByComponentName("TVsListCard").eq(1).children().last().then(secondElement=>{
                    const secondItemViewsInList = secondElement.text();
                    console.log('firstItemViewsInList', firstItemViewsInList , secondItemViewsInList)
                    expect(parseInt(firstItemViewsInList)).to.be.greaterThan(parseInt(secondItemViewsInList))
                })
            });
            });
    }
)