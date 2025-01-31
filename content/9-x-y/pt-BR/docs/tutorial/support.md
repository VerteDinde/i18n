# Suporte ao Electron

## Suporte para Busca

Se você tiver um problema de segurança, consulte o [documento de segurança](https://github.com/electron/electron/tree/master/SECURITY.md).

Se estiver procurando a ajuda da programação, para respostas a perguntas, ou para participar de discussões com outros desenvolvedores que usam o Electron, você pode interagir com a comunidade nesses locais:
- [`electron`](https://discuss.atom.io/c/electron) categoria nos fóruns Atom
- `Canal #atom-shell` no Freenode
- `canal #electron` no [Slack do Atom's](https://discuss.atom.io/t/join-us-on-slack/16638?source_topic_id=25406)
- [`electron-ru`](https://telegram.me/electron_ru) *(russo)*
- [`electron-br`](https://electron-br.slack.com) *(Português brasileiro)*
- [`electron-kr`](https://electron-kr.github.io/electron-kr) *(coreano)*
- [`electron-jp`](https://electron-jp.slack.com) *(japonês)*
- [`electron-tr`](https://electron-tr.herokuapp.com) *(turco)*
- [`electron-id`](https://electron-id.slack.com) *(Indonésia)*
- [`electron-pl`](https://electronpl.github.io) *(Polônia)*

Se você gostaria de contribuir com o Electron, veja o [documento contribuinte](https://github.com/electron/electron/blob/master/CONTRIBUTING.md).

Se você encontrou um bug em uma [versão suportada](#supported-versions) do Electron, por favor reporte-o com o [rastreador de problemas](../development/issues.md).

[incrível-elétrons](https://github.com/sindresorhus/awesome-electron) é uma lista mantida pela comunidade de aplicativos de exemplo ferramentas e recursos.

## Versões suportadas

As três últimas *estáveis* versões principais são suportadas pela equipe do Electron. For example, if the latest release is 6.x.y, then the 5.x.y as well as the 4.x.y series are supported.

A última versão estável recebe unilateralmente todas as correções do `master`, e a versão anterior a isso recebem a grande maioria dessas correções como garantia de tempo e largura de banda. A linha de lançamento mais antiga suportada receberá apenas correções de segurança diretamente.

Todas as linhas de lançamento suportadas aceitarão pull requests externos para backport correções previamente mescladas a `master`, , embora isto possa estar numa base caso-a-caso para algumas linhas mais antigas suportadas. Todas as decisões contestadas em torno do lançamento backports de linha serão resolvidas pelo [Releases do Grupo de Trabalho](https://github.com/electron/governance/tree/master/wg-releases) como um item da agenda em sua reunião semanal na semana em que o PR backport é gerado.

### Versões atualmente suportadas
- 8.x.y
- 7.x.y
- 6.x.y

### Fim da vida

Quando um branch de lançamento atinge o final do seu ciclo de suporte, a série será descontinuada no NPM e uma versão final de fim de suporte será feita. Esta versão adicionará um aviso para informar que uma versão de Electron não suportada está em uso.

Estas etapas são para ajudar os desenvolvedores de apps a aprenderem quando um branch que estão usando não se torna suportado, mas sem ser excessivamente intrusivo para os usuários finais.

If an application has exceptional circumstances and needs to stay on an unsupported series of Electron, developers can silence the end-of-support warning by omitting the final release from the app's `package.json` `devDependencies`. Por exemplo, desde que a série 1-6-x terminou com um fim de suporte 1.6. 8 lançamentos, desenvolvedores poderiam escolher para ficar nas séries 1-6-x sem avisos com `devDependência` de `"electron": 1. .0 - 1.6.17`.

## Plataformas Suportadas

Seguintes plataformas são suportadas pelo Electron:

### macOS

Apenas binários de 64bit são fornecidos para macOS, e a versão mínima do macOS é suportada é o macOS 10.10 (Yosemite).

### Windows

Windows 7 e versões posteriores têm suporte, sistemas operacionais mais antigos não são suportados (e não funcionam).

Ambos os binários `ia32` (`x86`) e `x64` (`amd64`) são fornecidos para o Windows. [Electron 6.0.8 e posteriores adicionam suporte nativo para Windows no Arm (`arm64`) dispositivos](windows-arm.md). Em execução de apps empacotados com versões anteriores é possível usando o executável do ia32.

### Linux

Os binários pré-construídos `ia32` (`i686`) e `x64` (`amd64`) do Electron são construídos em Ubuntu 12. 4, o binário `armv7l` é construído contra ARM v7 com ABI duro e NEON para Debian Wheezy.

[Until the release of Electron 2.0][arm-breaking-change], Electron will also continue to release the `armv7l` binary with a simple `arm` suffix. Ambos binários são idênticos.

Se o binário pré-construído pode ser executado em uma distribuição depende de se a distribuição inclui as bibliotecas às quais o Electron está ligado na plataforma de construção, apenas Ubuntu 12. 4 é garantido que funciona, mas as seguintes plataformas também são verificadas para poder executar os binários pré-construídos do Electron:

* Ubuntu 12.04 e mais recente
* Fedora 21
* Debian 8

[arm-breaking-change]: ../breaking-changes.md#duplicate-arm-assets
