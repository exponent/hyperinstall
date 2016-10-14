import { execAsync } from './exec';

export function execYarnInstallAsync(packagePath) {
  return execAsync('npm', ['install'], { cwd: packagePath, stdio: 'inherit' });
}
