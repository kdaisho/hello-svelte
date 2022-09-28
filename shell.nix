let
  pkgs2205 = import (fetchTarball "http://nixos.org/channels/nixos-22.05/nixexprs.tar.xz") {};
  pkgsUnstable = import (fetchTarball "http://nixos.org/channels/nixos-unstable/nixexprs.tar.xz") {};
in
  pkgs2205.mkShell {
    buildInputs = [
      pkgs2205.nodejs-16_x
      pkgsUnstable.docker-compose
    ];
  }