import { TourOfHeroesPage } from './app.po';

describe('Buscar heroe', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('Deberia resultar Details (heroe buscado)', () => {
    page.navigateTo();
    page.enterSearchHero('Narco');
    expect(page.getDetailsTitle()).toEqual('Narco details!');
  });
});

describe('Buscar heroe', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('Deberia resultar NarcoMan en el top (heroe editado)', () => {
    page.navigateTo();
    page.enterSearchHero('Narco');
    page.editHeroName('Man');
    expect(page.getTop4Heroes()).toEqual(['Mr. Nice', 'NarcoMan', 'Bombasto', 'Celeritas']);
  });
});

describe('Eliminar heroe', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('El conteo deberia ser menor (heroe eliminado)', () => {
    page.navigateToHeroes();
    page.deleteAnyHero();
    expect(page.getAllHeroes().count()).toBe(12);
  });
});
