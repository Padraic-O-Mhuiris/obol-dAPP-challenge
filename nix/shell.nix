{ ... }:

{
  config.perSystem = { pkgs, config, ... }: {
    devShells.default = pkgs.mkShell {
      inputsFrom = [ config.flake-root.devShell ];
      shellHook = ''
        export PATH="$FLAKE_ROOT/node_modules/.bin/:$PATH"
      '';
      nativeBuildInputs = with pkgs; [
        nodejs_21
        yarn
        nodePackages.typescript-language-server
      ];
    };
  };
}
